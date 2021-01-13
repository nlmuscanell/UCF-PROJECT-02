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
	serving_size_oz NUMERIC,
	calories_g NUMERIC,
	calories_from_fat NUMERIC,
	total_fat_g NUMERIC,
	total_fat_per_dv NUMERIC,
	saturated_fat_g NUMERIC,
	saturated_fat_per_dv NUMERIC,
	trans_fat_g NUMERIC,
	cholesterol_mg NUMERIC,
	cholesterol_per_dv NUMERIC,
	sodium_mg NUMERIC,
	sodium_per_dv NUMERIC,
	carbohydrates_g NUMERIC,
	carbohydrates_per_dv NUMERIC,
	dietary_fiber_g NUMERIC,
	dietary_fiber_per_dv NUMERIC,
	sugars_g NUMERIC,
	protein_g NUMERIC,
	vitamin_a_per_dv NUMERIC,
	vitamin_c_per_dv NUMERIC,
	calcium_per_dv NUMERIC,
	iron_per_dv NUMERIC
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