create table followup(
id serial primary key,
  cliente_cnpj text references clientes(cnpj_mf) not null,
  processo text,
  valor_cif integer,
  documentos text,
  motorista_veiculo text,
  origem text,
  destino text,
  container text,
  inicio date,
  conclusao date,
  followup_atual text
);

create table clientes(
cnpj_mf text primary key not null,
  nome text not null,
  email text not null unique
)
