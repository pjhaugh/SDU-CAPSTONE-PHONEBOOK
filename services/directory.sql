lock tables `directory` write;
drop table if exists `directory`;
lock tables `organizations` write;
drop table if exists `organizations`;

create table `directory`(
`organization_name` varchar(50) NOT NULL,
`name` varchar(50) NOT NULL,
`department` varchar(50) NOT NULL,
`extension` varchar(5) NOT NULL,
PRIMARY KEY(`extension`)
);

create table `organizations`(
`organization_name` varchar(50) NOT NULL,
`base_number` varchar(12) NOT NULL,
PRIMARY KEY(`base_number`)
);

insert into `organizations` values ('UMD', '301305'), ('Other Place', '1115559907,');
insert into `directory` values ('UMD', 'Jane Doe', 'Astrophysics', 1123), ('Other Place', 'John Doe', 'Accounting', 1136);
unlock tables;