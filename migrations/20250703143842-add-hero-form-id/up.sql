ALTER TABLE pages ADD COLUMN hero_form_id integer;
ALTER TABLE pages_versions ADD COLUMN hero_form_id integer;

ALTER TABLE pages
  ADD CONSTRAINT pages_hero_form_id_fkey FOREIGN KEY (hero_form_id) REFERENCES forms(id) ON DELETE SET NULL;
ALTER TABLE pages_versions
  ADD CONSTRAINT pages_versions_hero_form_id_fkey FOREIGN KEY (hero_form_id) REFERENCES forms(id) ON DELETE SET NULL;
