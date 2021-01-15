------------------------------------------------------------------------ 
--Drop table syntax if needed
------------------------------------------------------------------------

DROP TABLE nutrition;
DROP TABLE categories;
DROP TABLE restaurants;
DROP TABLE menu_items;

------------------------------------------------------------------------ 
--Table Creation
------------------------------------------------------------------------

CREATE TABLE categories (
	category_name VARCHAR,
	id INT,
	PRIMARY KEY(id)
);

CREATE TABLE menu_items (
	item_name VARCHAR,
	id INT,
	PRIMARY KEY(item_name)
);

CREATE TABLE restaurants (
	id INT,
	name VARCHAR,
	PRIMARY KEY(id)
);

CREATE TABLE nutrition (
	restaurant_id INT,
	category_id INT,
	item_id INT,
	serving_size_oz DOUBLE PRECISION,
	calories_g DOUBLE PRECISION,
	calories_from_fat DOUBLE PRECISION,
	total_fat_g DOUBLE PRECISION,
	total_fat_per_dv DOUBLE PRECISION,
	saturated_fat_g DOUBLE PRECISION,
	saturated_fat_per_dv DOUBLE PRECISION,
	trans_fat_g DOUBLE PRECISION,
	cholesterol_mg DOUBLE PRECISION,
	cholesterol_per_dv DOUBLE PRECISION,
	sodium_mg DOUBLE PRECISION,
	sodium_per_dv DOUBLE PRECISION,
	carbohydrates_g DOUBLE PRECISION,
	carbohydrates_per_dv DOUBLE PRECISION,
	dietary_fiber_g DOUBLE PRECISION,
	dietary_fiber_per_dv DOUBLE PRECISION,
	sugars_g DOUBLE PRECISION,
	protein_g DOUBLE PRECISION,
	vitamin_a_per_dv DOUBLE PRECISION,
	vitamin_c_per_dv DOUBLE PRECISION,
	calcium_per_dv DOUBLE PRECISION,
	iron_per_dv DOUBLE PRECISION,
	PRIMARY KEY(item_id)
);

--PRIMARY KEY(restaurant_id, category_id, item_id)--

------------------------------------------------------------------------ 
--IMPORT DATA INTO TABLES BEFORE ADDING FOREIGN KEYS
------------------------------------------------------------------------ 

------------------------------------------------------------------------ 
--Add Foreign Keys
------------------------------------------------------------------------ 

ALTER TABLE nutrition
ADD FOREIGN KEY (item_id) REFERENCES menu_items(id);

ALTER TABLE nutrition
ADD FOREIGN KEY(category_id) REFERENCES categories(id);

ALTER TABLE nutrition
ADD FOREIGN KEY(restaurant_id) REFERENCES restaurants(id);