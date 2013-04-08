lock tables `directory` write;
drop table if exists `directory`;
lock tables `organizations` write;
drop table if exists `organizations`;

create table `directory`(
`organization_id` int(3) NOT NULL,
`name` varchar(50) NOT NULL,
`department` varchar(50) NOT NULL,
`extension` varchar(5) NOT NULL,
PRIMARY KEY(`extension`)
);

create table `organizations`(
`id` int(3) NOT NULL AUTO_INCREMENT,
`Organization_name` varchar(50) NOT NULL,
`Base_number` varchar(12) NOT NULL,
PRIMARY KEY(`id`)
);

insert into `organizations` values (1, 'UMD', '301305');
insert into `directory` values (1, 'Jane Doe', 'Astrophysics', 1123);
insert into `directory` values (1, 'John Doe', 'Accounting', 1136);
unlock tables;