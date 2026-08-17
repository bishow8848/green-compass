-- AlterTable
-- Reconstructs the migration that was applied to the database from a
-- divergent branch. It removes the old hero carousel fields and adds the
-- hero CTA fields consumed by the new GreenCompassHero.
ALTER TABLE "home_page_settings"
    DROP COLUMN "featuredTrekIds",
    DROP COLUMN "heroDescription",
    DROP COLUMN "contactDescription",
    ADD COLUMN "heroPrimaryCtaLabel" TEXT DEFAULT 'Start exploring',
    ADD COLUMN "heroPrimaryCtaHref" TEXT DEFAULT '/search',
    ADD COLUMN "heroSecondaryCtaLabel" TEXT DEFAULT 'View field notes',
    ADD COLUMN "heroSecondaryCtaHref" TEXT DEFAULT '/blog';
