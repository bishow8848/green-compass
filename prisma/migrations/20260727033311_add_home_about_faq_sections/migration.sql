-- AlterTable
ALTER TABLE "home_page_settings" ADD COLUMN     "faqDescription" TEXT DEFAULT 'Everything you need to know before your Himalayan adventure.',
ADD COLUMN     "faqEnabled" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "faqHeading" TEXT DEFAULT 'Frequently Asked Questions About Trekking in Nepal',
ADD COLUMN     "faqItems" TEXT,
ADD COLUMN     "homeAboutContent" TEXT,
ADD COLUMN     "homeAboutDescription" TEXT DEFAULT 'Experience the Himalayas with Mardi Treks — a locally owned and operated trekking company based in Pokhara, Nepal. With years of expertise, we''ve guided thousands of adventurers across Nepal''s most iconic trails.',
ADD COLUMN     "homeAboutEnabled" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "homeAboutHeading" TEXT DEFAULT 'Nepal''s Premier Trekking & Adventure Company',
ADD COLUMN     "homeAboutImage" TEXT,
ADD COLUMN     "homeAboutSubheading" TEXT DEFAULT 'Who We Are';
