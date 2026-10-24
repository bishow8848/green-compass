import { prisma } from "@/lib/prisma";
import { resolveImageUrl } from "@/lib/auth-image";
import { KenBurns, Reveal } from "@/components/motion";

/**
 * Card shared by every auth page: the photo set in Admin -> Site Settings ->
 * Auth on the left, the page's own content on the right. It renders on the
 * server, so a page only ships JavaScript for the form inside it.
 */
export async function AuthShell({
  as: Wrapper = "div",
  panelClassName = "p-8 sm:p-10 lg:p-12",
  children,
}: {
  as?: "div" | "main";
  panelClassName?: string;
  children: React.ReactNode;
}) {
  const settings = await prisma.siteSetting.findUnique({
    where: { id: "site-settings" },
    select: { authImage: true },
  });
  const imageUrl = resolveImageUrl(settings?.authImage);

  return (
    <Wrapper className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-4xl">
        <Reveal
          from="scale"
          className="overflow-hidden rounded-3xl bg-white"
          style={{ border: "1px solid var(--color-border)", boxShadow: "0 20px 60px rgba(0,0,0,0.06)" }}
        >
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Left — bright photo, no overlay, no copy */}
            <div className="relative hidden overflow-hidden lg:block">
              <KenBurns>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }} />
              </KenBurns>
            </div>

            {/* Right — the page's own content */}
            <Reveal from="right" delay={0.12} className={panelClassName}>
              {children}
            </Reveal>
          </div>
        </Reveal>
      </div>
    </Wrapper>
  );
}
