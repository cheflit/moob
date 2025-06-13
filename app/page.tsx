import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, Shield, Sparkles, ThumbsUp } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { testimonials } from "@/data/testimonials"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-foreground font-semibold text-2xl tracking-wider logo-text">moob</Link>
            </div>
            <nav className="hidden md:flex gap-6">
              <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </Link>
              <Link href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Benefits
              </Link>
              <Link href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </Link>
              <Link href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="default">Shop Now</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">Confidence Redefined</h1>
              <p className="text-xl text-muted-foreground">
                Specialized chest tape designed for men with gynecomastia. Contour, shape, and feel confident again.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="default">Shop Products</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <Image
                  src="/package-image.png"
                  alt="Confidence Redefined"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">Real Solutions for Real Men</h2>
            <p className="text-muted-foreground md:text-xl">
              Gynecomastia affects up to 30% of men. We&apos;ve created a solution that&apos;s comfortable, effective, and
              designed specifically for men&apos;s bodies.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mt-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">The Challenge</h3>
              <p className="text-muted-foreground">
                Many men with gynecomastia struggle with confidence and finding clothing that fits well. Traditional
                solutions are often uncomfortable, obvious, or ineffective.
              </p>
              <h3 className="text-2xl font-bold text-foreground">Our Solution</h3>
              <p className="text-muted-foreground">
                moob tape is engineered specifically for men&apos;s chest tissue. It provides natural contouring, stays
                secure all day, and is virtually undetectable under clothing.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <Image
                  src="/real-solutions.png"
                  alt="Confidence Redefined"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">How It Works</h2>
            <p className="text-muted-foreground md:text-xl">Simple, effective, and designed for your comfort.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 mt-12">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-foreground">Prepare</h3>
                <p className="text-muted-foreground">
                  Clean and dry your chest area. Each kit comes with preparation wipes to ensure optimal adhesion.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-foreground">Apply</h3>
                <p className="text-muted-foreground">
                  Follow our simple application guide to place the tape for your desired contour effect. The ergonomic
                  design makes application easy.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-foreground">Confidence</h3>
                <p className="text-muted-foreground">
                  Enjoy up to 12 hours of secure hold and natural-looking results. Remove gently with our specialized
                  removal oil.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">The moob Advantage</h2>
            <p className="text-muted-foreground md:text-xl">Designed by men, for men. Experience the difference.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-foreground">Sweat Resistant</h3>
                <p className="text-muted-foreground">Stays secure through workouts and hot days.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <ThumbsUp className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-foreground">Comfortable Wear</h3>
                <p className="text-muted-foreground">Breathable material that moves with your body.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-foreground">Invisible Under Clothing</h3>
                <p className="text-muted-foreground">Ultra-thin design disappears under all fabrics.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-foreground">Skin-Safe Adhesive</h3>
                <p className="text-muted-foreground">Hypoallergenic and tested for sensitive skin.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Package className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-foreground">Discreet Packaging</h3>
                <p className="text-muted-foreground">Your privacy is our priority with plain packaging.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-foreground">Easy Application</h3>
                <p className="text-muted-foreground">Simple to apply and remove without assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">Real Results</h2>
            <p className="text-muted-foreground md:text-xl">Hear from men who&apos;ve regained their confidence with moob.</p>
          </div>
          <div className="mt-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
                containScroll: "trimSnaps",
                slidesToScroll: 1,
                inViewThreshold: 0.7,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.split(' ')[0][0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-bold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">Age {testimonial.age}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center mt-8 gap-2">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">Frequently Asked Questions</h2>
            <p className="text-muted-foreground md:text-xl">Everything you need to know about moob tape.</p>
          </div>
          <div className="mx-auto max-w-3xl mt-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="comfort">
                <AccordionTrigger className="text-xl font-bold text-foreground">
                  Is it comfortable to wear all day?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, our tape is designed for all-day comfort with breathable materials that move with your body. Most
                  users report forgetting they&apos;re wearing it.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="body-type">
                <AccordionTrigger className="text-xl font-bold text-foreground">
                  Will it work for my body type?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  moob tape comes in different sizes and strengths for different body types and degrees of gynecomastia.
                  Our sizing guide helps you find your perfect match.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="noticeable">
                <AccordionTrigger className="text-xl font-bold text-foreground">
                  Is it noticeable under clothing?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No, our tape is ultra-thin and designed to be invisible under all types of clothing, from t-shirts to
                  dress shirts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="duration">
                <AccordionTrigger className="text-xl font-bold text-foreground">
                  How long does each application last?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A single application typically lasts 8-12 hours with proper application. Each pack contains enough tape
                  for multiple applications.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
              Ready to Transform Your Confidence?
            </h2>
            <p className="text-muted-foreground md:text-xl">Join thousands of men who&apos;ve discovered the moob difference.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button variant="default" size="lg">Shop Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 border-t border-border">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4">
                <span className="text-foreground font-semibold text-2xl tracking-wider logo-text">moob</span>
              </h3>
              <p className="text-sm text-muted-foreground">Confidence solutions for men.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    All Products
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} moob. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
