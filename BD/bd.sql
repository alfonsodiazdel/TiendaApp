create database Tienda
go

use Tienda
go

CREATE TABLE Tipo(
idTipo int primary key IDENTITY(1,1),
descripcion varchar(30) not null
)

CREATE TABLE Usuario(
idUsuario int primary key  IDENTITY(1,1) ,
idTipo int not null,
nombre varchar(150) not null,
email varchar(150) not null,
foto varchar(150) not null,
foreign key(idTipo) references Tipo(idTipo)
)

CREATE TABLE Producto(
idProducto int primary key IDENTITY(1,1),
marca varchar(30) not null,
precio decimal(8,2) not null,
descripcion varchar(30) not null,
foto varchar(250) not null
)

CREATE TABLE Carro(
idCarro int primary key IDENTITY(1,1),
idUsuario int not null,
activo bit not null,
foreign key (idUsuario) references Usuario(idUsuario)
)

CREATE TABLE Producto_Carro(
idProducto_Carro int primary key IDENTITY(1,1),
idCarro int not null,
idProducto int not null,
cantidad int not null,
foreign key (idCarro) references Carro(idCarro) on delete cascade,
foreign key (idProducto) references Producto(idProducto) on delete cascade
)

insert into Tipo(descripcion) VALUES ('USUARIO')
insert into Tipo(descripcion) VALUES ('ADMINISTRADOR')

insert into Producto(marca,precio,descripcion,foto) VALUES('ACE',15.0,'Detergente 5kg','https://promart.vteximg.com.br/arquivos/ids/265431-444-444/116656.jpg?v=636807639709030000')
insert into Producto(marca,precio,descripcion,foto) VALUES('Gloria',3.0,'Tarro de Leche','https://tuchacrita.pe/225-big_default_2x/leche-gloria.jpg')
insert into Producto(marca,precio,descripcion,foto) VALUES('ACE',15.0,'Detergente 5kg','https://promart.vteximg.com.br/arquivos/ids/265431-444-444/116656.jpg?v=636807639709030000')
insert into Producto(marca,precio,descripcion,foto) VALUES('Gloria',3.0,'Tarro de Leche','https://tuchacrita.pe/225-big_default_2x/leche-gloria.jpg')
insert into Producto(marca,precio,descripcion,foto) VALUES('ACE',15.0,'Detergente 5kg','https://promart.vteximg.com.br/arquivos/ids/265431-444-444/116656.jpg?v=636807639709030000')
insert into Producto(marca,precio,descripcion,foto) VALUES('Gloria',3.0,'Tarro de Leche','https://tuchacrita.pe/225-big_default_2x/leche-gloria.jpg')
insert into Producto(marca,precio,descripcion,foto) VALUES('ACE',15.0,'Detergente 5kg','https://promart.vteximg.com.br/arquivos/ids/265431-444-444/116656.jpg?v=636807639709030000')
insert into Producto(marca,precio,descripcion,foto) VALUES('Gloria',3.0,'Tarro de Leche','https://tuchacrita.pe/225-big_default_2x/leche-gloria.jpg')

