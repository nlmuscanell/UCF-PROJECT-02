__________________________________
--Changing 'NaN' to "Null"
__________________________________

UPDATE nutrition
SET serving_size_oz = NULL
WHERE serving_size_oz = 'NaN';

UPDATE nutrition
SET calories_from_fat = NULL
WHERE calories_from_fat = 'NaN';

UPDATE nutrition
SET total_fat_per_dv = NULL
WHERE total_fat_per_dv = 'NaN';

UPDATE nutrition
SET calories_from_fat = NULL
WHERE calories_from_fat = 'NaN';

UPDATE nutrition 
SET saturated_fat_g = NULL
WHERE saturated_fat_g = 'NaN';

UPDATE nutrition
SET saturated_fat_per_dv = NULL
WHERE saturated_fat_per_dv  = 'NaN';

UPDATE nutrition
set trans_fat_g = NULL
WHERE trans_fat_g  = 'NaN';

UPDATE nutrition
SET cholesterol_mg = NULL
WHERE cholesterol_mg = 'NaN';

UPDATE nutrition
SET cholesterol_per_dv = NULL
WHERE cholesterol_per_dv  = 'NaN';

UPDATE nutrition
SET sodium_mg = NULL
WHERE sodium_mg = 'NaN';

UPDATE nutrition
SET sodium_per_dv = NULL
WHERE sodium_per_dv  = 'NaN';

UPDATE nutrition
SET carbohydrates_per_dv = NULL
WHERE carbohydrates_per_dv = 'NaN';

UPDATE nutrition
SET dietary_fiber_per_dv = NULL
WHERE dietary_fiber_per_dv  = 'NaN';

UPDATE nutrition
SET sugars_g = NULL
WHERE sugars_g = 'NaN';

UPDATE nutrition
SET vitamin_a_per_dv = NULL
WHERE vitamin_a_per_dv  = 'NaN';

UPDATE nutrition
SET vitamin_c_per_dv = NULL
WHERE vitamin_c_per_dv = 'NaN';

UPDATE nutrition
SET calcium_per_dv= NULL
WHERE calcium_per_dv  = 'NaN';

UPDATE nutrition
SET iron_per_dv = NULL
WHERE iron_per_dv = 'NaN';


