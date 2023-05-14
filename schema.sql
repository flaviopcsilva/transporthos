create table followup(
id serial primary key,
  cliente_cnpj text references clientes(cnpj_mf) not null,
  processo text,
  valorcif integer,
  documentos text,
  motorista_veiculo text,
  origem text,
  destino text,
  container text,
  inicio text,
  conclusao text,
  followup_atual text
);

create table clientes(
cnpj_mf text primary key not null unique,
  nome text not null,
  email text not null unique
)
