drop table if exists `directory`;
drop table if exists `organizations`;

create table `directory`(
`organization_id` int(3) NOT NULL,
`name` varchar(50) NOT NULL,
`department` varchar(50) NOT NULL,
`extension` varchar(5) NOT NULL,
PRIMARY KEY(`extension`)
);

create table `organizations`(
`id` int(3) NOT NULL,
`Organization_name` varchar(50) NOT NULL,
`Base_number` varchar(12) NOT NULL,
PRIMARY KEY(`id`)
);

lock tables `organizations` write;
insert into `organizations` values (1, `UMD`, `301305`);
unlock tables;
lock tables `directory` write;
insert into `directory` values (1, 'Jane Doe', 'Astrophysics', 1123);
insert into `directory` values (1, 'John Doe', 'Accounting', 1136);
unlock tables;