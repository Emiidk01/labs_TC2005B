use ejercicio;

CREATE TABLE Pelicula (
    titulo VARCHAR(100),
    año INT,
    duracion INT,
    encolor BOOLEAN,
    presupuesto DECIMAL(10, 2),
    nomestudio VARCHAR(100),
    idproductor INT,
    PRIMARY KEY (titulo, año),
    FOREIGN KEY (nomestudio) REFERENCES Estudio(nomestudio),
    FOREIGN KEY (idproductor) REFERENCES Productor(idproductor)
);

CREATE TABLE Elenco (
    titulo VARCHAR(100),
    año INT,
    nombre VARCHAR(100),
    sueldo DECIMAL(10, 2),
    PRIMARY KEY (titulo, año, nombre),
    FOREIGN KEY (titulo, año) REFERENCES Pelicula(titulo, año)
);

CREATE TABLE Actor (
    nombre VARCHAR(100),
    direccion VARCHAR(255),
    telefono VARCHAR(20),
    fechanacimiento DATE,
    sexo CHAR(1),
    PRIMARY KEY (nombre)
);

CREATE TABLE Productor (
    idproductor INT AUTO_INCREMENT,
    nombre VARCHAR(100),
    dirección VARCHAR(255),
    teléfono VARCHAR(20),
    PRIMARY KEY (idproductor)
);

CREATE TABLE Estudio (
    nomestudio VARCHAR(100),
    dirección VARCHAR(255),
    PRIMARY KEY (nomestudio)
);


INSERT INTO Estudio (nomestudio, dirección) VALUES 
('Universal Pictures', '123 Calle Principal, Los Angeles'),
('Warner Bros. Pictures', '456 Avenida Central, Burbank'),
('Paramount Pictures', '789 Camino Hollywood, Los Angeles');


INSERT INTO Productor (nombre, dirección, teléfono) VALUES 
('John Smith', '456 Calle Hollywood, Los Angeles', '+1-123-456-7890'),
('Emma Johnson', '789 Avenida Sunset, Los Angeles', '+1-234-567-8901'),
('Michael Brown', '321 Avenida Broadway, New York', '+1-345-678-9012');


INSERT INTO Pelicula (titulo, año, duracion, encolor, presupuesto, nomestudio, idproductor) VALUES 
('The Matrix', 1999, 136, TRUE, 63000000.00, 'Warner Bros. Pictures', 1),
('Titanic', 1997, 195, TRUE, 20000000.00, 'Paramount Pictures', 2),
('Jurassic Park', 1993, 127, TRUE, 63000000.00, 'Universal Pictures', 3);

INSERT INTO Pelicula (titulo, año, duracion, encolor, presupuesto, nomestudio, idproductor) VALUES
('The Batman', 1985, 136, TRUE, 63000000.00, 'Warner Bros. Pictures', 1),
('Tilin la venganza de etesech', 1980, 136, TRUE, 93000000.00, 'Warner Bros. Pictures', 1);

INSERT INTO Pelicula (titulo, año, duracion, encolor, presupuesto, nomestudio, idproductor) VALUES 
('Lalaland', 2018, 136, TRUE, 73050000.00, 'Warner Bros. Pictures', 1);


INSERT INTO Actor (nombre, direccion, telefono, fechanacimiento, sexo) VALUES 
('Keanu Reeves', '123 Calle Actuación, Los Angeles', '+1-111-222-3333', '1964-09-02', 'M'),
('Leonardo DiCaprio', '456 Avenida Actuación, Los Angeles', '+1-444-555-6666', '1974-11-11', 'M'),
('Tom Hanks', '789 Camino Actuación, Los Angeles', '+1-777-888-9999', '1956-07-09', 'M');

INSERT INTO Actor (nombre, direccion, telefono, fechanacimiento, sexo) VALUES 
('Emma Stone', 'City of Stars, Los Angeles', '+2-315-282-3381', '1996-02-12', 'F');


INSERT INTO Elenco (titulo, año, nombre, sueldo) VALUES 
('The Matrix', 1999, 'Keanu Reeves', 10000000.00),
('Titanic', 1997, 'Leonardo DiCaprio', 20000000.00),
('Jurassic Park', 1993, 'Tom Hanks', 15000000.00);

INSERT INTO Elenco (titulo, año, nombre, sueldo) VALUES 
('Lalaland', 2018, 'Emma Stone', 1990000.00)


-- Queries

-- El ingreso total recibido por cada actor, sin importar en cuantas películas haya participado.
select nombre, sum(sueldo) from elenco 
group by nombre;

-- El monto total destinado a películas por cada Estudio Cinematográfico, durante la década de los 80's.
select titulo, presupuesto from pelicula as p
join estudio as e
on p.nomestudio = e.nomestudio
where p.año between 1980 and 1989;

-- Nombre y sueldo promedio de los actores (sólo hombres) que reciben en promedio un pago superior a 5 millones de dolares por película.
select a.nombre, avg(e.sueldo)
from Elenco as e
join Actor as a on e.nombre = a.nombre
where a.sexo = 'M'and e.sueldo > 5000000
group by a.nombre;

-- Título y año de producción de las películas con menor presupuesto. (Por ejemplo, la película de Titanic se ha producido en varias veces entre la lista de películas estaría la producción de Titanic y el año que fue filmada con menor presupuesto).
select titulo, año 
from pelicula as p 
join (
	select min(presupuesto) as min_presupuesto
	from pelicula
) as min_p
on p.presupuesto = min_p.min_presupuesto;


-- Mostrar el sueldo de la actriz mejor pagada.
select sueldo
from Elenco as e
join Actor as a on e.nombre = a.nombre
where a.sexo = "F" and e.sueldo = (
	select max(e.sueldo)
	from elenco as e2
	join actor as a2 on e2.nombre = a2.nombre
	where a2.sexo = 'F')
group by a.nombre;
