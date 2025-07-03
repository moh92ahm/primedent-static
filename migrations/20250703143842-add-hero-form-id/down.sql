ALTER TABLE pages DROP CONSTRAINT IF EXISTS pages_hero_form_id_fkey;
ALTER TABLE pages_versions DROP CONSTRAINT IF EXISTS pages_versions_hero_form_id_fkey;
ALTER TABLE pages DROP COLUMN IF EXISTS hero_form_id;
ALTER TABLE pages_versions DROP COLUMN IF EXISTS hero_form_id;
