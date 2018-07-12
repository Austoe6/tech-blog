---
templateKey: blog
title: 'MySQL tutorial: Dropping and adding foreign keys with constraints'
date: '2018-07-13T00:32:20+03:00'
thumbnail: /img/macbook-2617705_1280.jpg
description: >-
  Solved 'ERROR 1064 (42000): You have an error in your SQL syntax; check the
  manual that corresponds to your MySQL server version for the right syntax to
  use near';'ERROR 1025 (HY000): Error on rename of '.\jkuatbas\college' to
  '.\jkuatbas\#sql2-f08-1' (errno: 152)'. This tutorial explains how to solve
  the given errors when using MySQL command line.
category: quick fixes
author: Austin Okhala
featured: true
---
I recently started using MySQL Command-line 5.5 with literally no idea of any SQL command language. It would seem nearly impossible to master an entire language in less than a week but you've got to trust me on this unlike any other programming language like Java, C and C++, SQL is too straight forward with very few keywords to master. 

To get started with MySQL Command-line you first need to download the 'mysql.exe' file and install it in your PC. If you're having troubles with installation or root passwords make sure uninstall any thread of previously installed MySQL then try re-installing. You can use iobit Uninstaller or any other uninstaller you got for your PC.

When it comes to designing and creating a database using MySQL Command line the trick is all about your mastery of keywords and accuracy. 

After creating several tables in my first database I decided to link them. 

My first entries were just fine but more errors kept popping as I proceeded. These constraints errors proved to be a challenge to some of my other friends too.

These are some of the errors you probably have encountered;

```
ERROR 1025 (HY000): Error on rename of '.\me\simptom' to '.\me\#sql2-f08-1' (errno: 152 
```

```
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '' at line 1
```

Or any other constraints in that case.

So here is the fix for this kind of errors;

## a). How to drop a foreign key

This my original table

```

```

```
mysql> describe college;
```

```
+------------------+-------------+------+-----+---------+-------+
```

```
| Field            | Type        | Null | Key | Default | Extra |
```

```
+------------------+-------------+------+-----+---------+-------+
```

```
| college_name     | varchar(20) | NO   |     | NULL    |       |
```

```
| college_location | varchar(20) | NO   |     | NULL    |       |
```

```
| college_id       | int(10)     | NO   | PRI | NULL    |       |
```

```
| campus_id        | int(10)     | NO   | MUL | NULL    |       |
```

```
+------------------+-------------+------+-----+---------+-------+
```

You need to type the following command first;

```
mysql> show create table college;
```

```
+---------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

```
| Table   | Create Table                                                                                                                                                                                                                                                                                                                                                                  |
```

```
+---------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

```
| college | CREATE TABLE `college` (
```

```
  `college_name` varchar(20) NOT NULL,
```

```
  `college_location` varchar(20) NOT NULL,
```

```
  `college_id` int(10) NOT NULL,
```

```
  `campus_id` int(10) NOT NULL,
```

```
  PRIMARY KEY (`college_id`),
```

```
  KEY `campus_id` (`campus_id`),
```

```
  CONSTRAINT `college_ibfk_1` FOREIGN KEY (`campus_id`) REFERENCES `campuses` (`campus_id`)
```

```
) ENGINE=InnoDB DEFAULT CHARSET=latin1 |
```

```
+---------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

Note the constraint key involved then drop it as shown below;

```
mysql> alter table college drop foreign key college_ibfk_1;
```

```
Query OK, 0 rows affected (0.30 sec)
```

```
Records: 0  Duplicates: 0  Warnings: 0
```

At this point, our foreign key is gone, the entry is just a null value and we just drop it the usual way;

```
mysql> alter table college drop campus_id;
```

```
Query OK, 0 rows affected (0.23 sec)
```

```
Records: 0  Duplicates: 0  Warnings: 0
```

This is how we drop a foreign key with constraints or any other foreign key using MySQL Command line.

## b). Adding foreign key when having constraints errors

When constraints restrictions are stopping you from linking your tables this is what you do;

Here is my table, I want to make the 'campus_id' my foreign key

```
mysql> describe courses;
```

```
+---------------+-------------+------+-----+---------+-------+
```

```
| Field         | Type        | Null | Key | Default | Extra |
```

```
+---------------+-------------+------+-----+---------+-------+
```

```
| course_name   | varchar(20) | NO   |     | NULL    |       |
```

```
| course_id     | int(10)     | NO   | PRI | NULL    |       |
```

```
| college_id    | int(10)     | NO   |     | NULL    |       |
```

```
| campus_id     | int(10)     | NO   |     | NULL    |       |
```

```
| department_id | int(10)     | NO   |     | NULL    |       |
```

```
+---------------+-------------+------+-----+---------+-------+
```

If altering the table and adding your key gives you back some constraints errors you must turn off the constraints, add your key then turn it on as follows;

```
mysql> set foreign_key_checks=0;
```

```
Query OK, 0 rows affected (0.00 sec)
```

```

```

```
mysql> alter table courses add foreign key (campus_id) REFERENCES campuses(campus_id);
```

```
Query OK, 2 rows affected (0.48 sec)
```

```
Records: 2  Duplicates: 0  Warnings: 0
```

```

```

```
mysql> set foreign_key_checks=1;
```

```
Query OK, 0 rows affected (0.16 sec)
```

If this helped please subscribe or contact us for quality improvement.
