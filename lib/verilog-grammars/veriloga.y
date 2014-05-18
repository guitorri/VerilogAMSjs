%start source_text
%ebnf
%%

source_text 
  : description*  ;
description
  : module_dec
  | udp_dec
  | config_dec
  | paramset_dec
  | nature_dec
  | discipline_dec
  | connectrules_dec
  ;
module_dec
  : ( attribute_instance )* 'module' module_identifier module_parameter_port_list? list_of_ports ';' ( module_item )* 'endmodule'
  | ( attribute_instance )* 'module' module_identifier module_parameter_port_list? list_of_port_decs? ';' ( non_port_module_item )* 'endmodule'
  ;
module_parameter_port_list
  : '#' '(' parameter_dec ( ',' parameter_dec )* ')'
  ;
list_of_port
  : '(' port ( ',' port )* ')' 
  ;
list_of_port_decs
  : '(' port_dec ( ',' port_dec )* ')'
  | '(' ')'
  ;
port
  : port_expression?
  | '.' port_identifier '(' port_expression? ')'
  ;
port_expression
  : port_reference
  | '{' port_reference ( ',' port_reference )* '}'
  ;
port_reference
  : port_identifier ( '[' constant_range_expression ']' )?
  ;
port_dec
  : ( attribute_instance )* inout_dec
  | ( attribute_instance )* input_dec
  | ( attribute_instance )* output_dec
  ;

/* module items */

module_item
  : port_dec ';'
  | non_port_module_item
  ;
module_or_generate_item
  : ( attribute_instance )* module_or_generate_item_dec
  | ( attribute_instance )* local_parameter_dec
  | ( attribute_instance )* parameter_override
  | ( attribute_instance )* continuous_assign
  | ( attribute_instance )* gate_instantiation
  | ( attribute_instance )* udp_instantiation
  | ( attribute_instance )* module_instantiation
  | ( attribute_instance )* initial_construct
  | ( attribute_instance )* always_construct
  | ( attribute_instance )* loop_generate_construct
  | ( attribute_instance )* conditional_generate_construct
  | ( attribute_instance )* analog_construct
  ;
module_or_generate_item_dec
  : net_dec
  | reg_dec
  | integer_dec
  | real_dec
  | time_dec
  | realtime_dec
  | event_dec
  | genvar_dec
  | task_dec
  | function_dec
  | branch_dec
  | analog_funciton_dec
  ;
non_port_module_item
  : module_or_generate_item
  | generate_region
  | specify_block
  | ( attribute_instance )* parameter_dec
  | ( zttribute_instance )* specparam_dec
  | aliasparam_dec
  ;
parameter_override
  : 'defparam'  list_of_defparam_assignments  ';'
  ;

/* Configuration source text */

config_dec
  : 'config'  config_identifier ';' design_statement  ( config_rule_statement )*  'endconfig'
  ;
design_statement
  : 'design' ( (library_identifier '.')* cell_identifier )* ';'
  ;
config_rule_statement
  : default_claus liblist_clause
  | inst_clause liblist_clause
  | inst_clause use_clause
  | cell_clause liblist_clause
  | cell_clause use_clause
  ;
default_clause
  : 'default'
  ;
inst_clause
  : 'instance'  inst_name
  ;
inst_name
  : topmodule_identifier ( '.' instance_identifier )*
  ;
cell_clause
  : 'cell'  ( library_identifier '.' )? cell_identifier
  ;
liblist_clause
  : 'liblist' ( library_identifier )*
  ;
use_clause
  : 'use' ( library_identifier '.' )? cell_identifier ( ':config' )?
  ;

/*  nature declaration */

nature_dec
  : 'nature'  nature_identifier ( ':' parent_nature )? ( ';' )? ( nature_item )* 'endnature'
  ;
parent_nature
  : nature_identifier
  | discipline_identifier '.' potential_or_flow
  ;
nature_item
  : nature_attribute
  ;
nature_attribute
  : nature_attribute_identifier '=' nature_attribute_expression ';'
  ;

/* discipline declaration */

discipline_dec
  : 'discipline' discipline_identifier ( ';' )? ( discipline_item )* 'enddiscipline'
  ;
discipline_item
  : nature_binding
  | discipline_domain_binding
  | nature_attribute_override
  ;
nature_binding
  : potential_or_flow nature_identifier ';'
  ;
potential_or_flow
  : 'potential'
  | 'flow'
  ;
discipline_domain_binding
  : 'domain' discrete_or_continuous ';'
  ;
discrete_or_continuous
  : 'discrete'
  | 'continuous'
  ;
nature_attribute_override
  : potential_or_flow '.' nature_attribute
  ;

/* connectrules declaration */

connectrules_dec
  : 'connectrules' connectrules_identifier ';' ( connectrules_item )* 'endconnectrules'
  ;
connectrules_item
  : connect_insertion
  | connect_resolution
  ;
connect_insertion
  : 'connect' connectmodule_identifier connect_mode? parameter_value_assignment? connect_port_overrides? ';'
  ;
connect_port_overrides
  : discipline_identifier ',' discipline_identifier
  | 'input' discipline_identifier ',' 'output' discipline_identifier
  | 'output' discipline_identifier ',' 'input' discipline_identifier
  | 'inout' discipline_identifier ',' 'inout' discipline_identifier
  ;
connect_resolution
  : 'connect' discipline_identifier ( ',' discipline_identifier ) 'resolveto' discipline_identifier
  | 'exclude' ';'
  ;

/* paramset declaration */
paramset_dec
  : ( attribute_instance )* 'paramset' paramset_identifier module_or_paramset_identifier ';'
  | paramset_item_dec ( paramset_item_dec )* paramset_statement ( paramset_statement )* 'endparamset'
  ;
paramset_item_dec
  : ( attribute_instance )* parameter_dec ';'
  | ( attribute_instance )* local_parameter_dec ';'
  | ( attribute_instance )* integer_dec ';'
  | ( attribute_instance )* real_dec
  | aliasparam_dec
  ;
paramset_statment
  : '.' module_parameter_identifier '=' paramset_constant_expression ';'
  | '.' system_parameter_identifier '=' paramset_constant_expression ';'
  | analog_function_statement
  ;
paramset_constant_expression
  : constant_primary
  | hierarchical_parameter_identifier
  | unary_operator ( attribute_instance )* constant_primary
  | paramset_constant_expression binary_operator ( attribute_instance )* paramset_constant_expression
  | paramset_constant_expression '?' ( attribute_instance )* paramset_constant_expression ':' paramset_constant_expression
  ;

/* declarations */
local_parameter_dec
  : 'localparam' ( 'signed' )? ( range )? list_of_param_assignments
  | 'localparam' parameter_type list_of_param_assignments
  ; 
parameter_dec
  : 'parameter' ( 'signed' )? ( range )? list_of_param_assignments
  | 'parameter' parameter_type list_of_param_assignments
  ;
specparam_dec
  : 'specparam' (range )? list_of_specparam_assignments ';'
  ;
parameter_type
  : 'integer'
  | 'real'
  | 'realtime'
  | 'time'
  | 'string'
  ;
aliasparam_dec
  : 'aliasparam' parameter_identifier '=' parameter_identifier ';'
  ;

inout_dec
  : 'inout' ( discipline_identifier )? ( net_type | 'wreal' )? ( 'signed' )? ( range )? list_of_port_identifiers
  ;
input_dec
  : 'input' ( discipline_identifier )? ( net_type | 'wreal' )? ( 'signed' )? ( range )? list_of_port_identifiers
  ;
output_dec
  : 'output' ( discipline_identifier )? ( net_type | 'wreal' )? ( 'signed' )? ( range )? list_of_port_identifiers
  | 'output' ( discipline_identifier )? 'reg' ( 'signed' )? ( range )? list_of_variable_port_identifiers
  | 'output' output_variable_type list_of_variable_port_identifiers
  ;

/* type declarations */

branch_dec
  : 'branch' '(' branch_terminal ( ',' branch_terminal )? ')' list_of_branch_identifiers ';'
  ;
branch_terminal
  : net_identifier
  | net_identifier '[' constant_expression ']'
  | net_identifier '[' constant_range_expression ']'
  ;
event_dec
  : 'event' list_of_event_identifiers ';'
  ;
integer_dec
  : 'integer' list_of_variable_identifiers ';'
  ;
net_dec
  : net_type ( discipline_identifier )? ( 'signed' )? ( delay3 ) list_of_identifiers ';'
  | net_type ( discipline_identifier )? ( drive_strength )? ( 'signed' )? ( delay3 )? list_of_net_decl_assignments ';'
  | net_type ( discipline_identifier )? ( 'vectored' | 'scalared' )? ( 'signed' )? range ( delay3 )? list_of_net_identifiers ';'
  | net_type ( discipline_identifier )? ( drive_strength )? ( 'vectored' | 'scalared' )? ( 'signed' )? range ( delay3 )? list_of_net_decl_assignments ';'
  | 'trireg' ( discipline_identifier )? ( charge_strength )? ( 'signed' )? ( delay3 )? list_of_net_identifiers ';'
  | 'trireg' ( discipline_identifier )? ( drive_strength )? ( 'signed' )? ( delay3 )? list_of_net_decl_assignments ';'
  | 'trireg' ( discipline_identifier )? ( charge_strength )? ( 'vectored' | 'scalared' )? ( 'signed' )? range ( delay3 )? list_of_net_identifiers ';'
  | 'trireg' ( discipline_identifier )? ( drive_strength )? ( 'vectored' | 'scalared' )? ( 'signed' )? range ( delay3 )? list_of_net_decl_assignments ';'
  | discipline_identifier ( range )? list_of_net_identifiers ';'
  | discipline_identifier ( range )? list_of_net_decl_assignments ';'
  | 'wreal' ( discipline_identifier )? ( range )? list_of_net_identifiers ';'
  | 'wreal' ( discipline_identifier )? ( range )? list_of_net_decl_assignments ';'
  | 'ground' ( discipline_identifier )? ( range )? list_of_net_identifiers ';'
  ;
real_dec
  : 'real' list_of_real_identifiers ';'
  ;
realtime_dec
  : 'realtime' list_of_real_identifiers ';'
  ;
reg_dec
  : 'reg' ( discipline_identifiers )? ( 'signed' )? ( range )? list_of_variable_identifiers ';'
  ;
time_dec
  : 'time' list_of_variable_identifiers ';'
  ;

/* declaration data types */

net_type
  : 'supply0'
  | 'supply1'
  | 'tri'
  | 'triand'
  | 'trior'
  | 'tri0'
  | 'tri1'
  | 'uwire'
  | 'wire'
  | 'wand'
  | 'wor'
  ;

output_variable_type
  : 'integer' | 'time'
  ;
real_type
  : real_identifier ( dimension )* ( '=' constant_arrayinit )?
  | real_identifier '=' constant_expression
  ;
variable_type
  : variable_identifier ( dimension )* ( '=' constant_arrayinit )?
  | variable_identifier '=' constant_expression
  ;

/* strengths */
drive_strength
  : '(' strength0 ',' strength1 ')'
  | '(' strength1 ',' strength0 ')'
  | '(' strength0 ',' 'highz1' ')'
  | '(' strength1 ',' 'highz0' ')'
  | '(' 'highz0' ',' strength1 ')'
  | '(' 'highz1' ',' strength0 ')'
  ;
strength0
  : 'supply0' | 'strong0' | 'pull0' | 'weak0' ;
strength1
  : 'supply1' | 'strong1' | 'pull1' | 'weak1' ;
charge_strength 
  : '(' 'small' ')' | '(' 'medium' ')' | '(' 'large' ')'
  ;

/* delays */
delay3
  : '#' delay_value
  | '#' '(' mintypmax_expression ( ',' mintypmax_expression ( ',' mintypmax_expression ) ? ) ? ')'
  ;
delay_value
  : unsigned_number | real_number | identifier ;

/* declaration lists */

list_of_branch_identifiers  
  : x ( range ) ? ( ',' x ( range )? )* ;
list_of_defparam_assignments
  : defparam_assignment  ( ',' defparam_assignment  )* ;
list_of_event_identifiers 
  : event_identifier ( dimension )* ( ',' event_identifier (dimension)* )*;
list_of_net_decl_assigments
  : net_decl_assignment ( ',' net_decl_assignment )*;
list_of_net_identifiers
  : ams_net_identifier ( ',' ams_net_identifier )*;
list_of_param_assignments
  : param_assignment ( ',' param_assignment )*;
list_of_port_identifiers
  : port_identifier ( ',' port_identifier )*;
list_of_real_identifiers
  : real_identifier ( ',' real_identifier )*;
list_of_specparam_assignments
  : specparam_assignment ( ',' specparma_assignment )*;
list_of_variable_identifiers
  : variable_type ( ',' variable_type )*;
list_of_variable_port_identifiers
  : port_identifier ( '=' constant_expression )? ( ',' port_identifier ( '=' constant_expression )? )*;

/* declaration assignments */ 
