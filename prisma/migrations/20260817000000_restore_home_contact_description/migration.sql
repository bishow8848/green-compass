-- AlterTable
-- Restores the contact description that the divergent
-- "remove_hero_carousel_add_ctas" migration dropped from the database. The
-- homepage contact section still reads and renders this field.
ALTER TABLE "home_page_settings" ADD COLUMN     "contactDescription" TEXT DEFAULT 'Have a question about a trek, need help planning your itinerary, or ready to book? Send us a message and we''ll get back to you within 24 hours.';
