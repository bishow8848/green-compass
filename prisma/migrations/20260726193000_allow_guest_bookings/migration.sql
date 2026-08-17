ALTER TABLE "bookings"
ALTER COLUMN "userId" DROP NOT NULL;

ALTER TABLE "bookings"
DROP CONSTRAINT IF EXISTS "bookings_userId_fkey";

ALTER TABLE "bookings"
ADD CONSTRAINT "bookings_userId_fkey"
FOREIGN KEY ("userId") REFERENCES "users"("id")
ON DELETE SET NULL ON UPDATE CASCADE;
