// app/page.tsx

import { AboutComponent } from "@/components/home/About";
import { HeroComponent } from "@/components/home/Hero";
import { ServicesComponent } from "@/components/home/Sevices";
import { TestimoniesComponent } from "@/components/home/Testimonies";
import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
    return (
        <main>
            {/* Header */}
            <header className="flex items-center justify-between p-4 bg-blue-900 text-white">
                <div className="text-xl font-bold">
                    <Image src="/path/to/logo.png" alt="Logo de la Empresa" width={40} height={40} />
                </div>
                <nav className="flex gap-4">
                    <a href="#services">Servicios</a>
                    <a href="#benefits">Beneficios</a>
                    <a href="#testimonials">Testimonios</a>
                    <a href="#contact">Contacto</a>
                </nav>
                <Link href="#contact">
                    <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                        Solicita una Cotización Gratuita
                    </button>
                </Link>
            </header>

            {/* Hero Section */}
            <section id="hero" >
                <HeroComponent />
            </section>

            {/* About Section */}
            <section id="about" >
                <AboutComponent />
            </section>

            {/* Services Section */}
            <section id="services" >
                <ServicesComponent />
            </section>

            {/* Testimonies Section */}
            <section id="testimonies" >
                <TestimoniesComponent />
            </section>

            <section id="services" className="py-16 bg-gray-100 text-center">
                <h2 className="text-3xl font-bold mb-8">Nuestros Servicios de Automatización</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="bg-white shadow-md p-6 rounded-lg w-72">
                        <i className="fas fa-cogs text-4xl text-blue-500 mb-4"></i>
                        <h3 className="text-xl font-semibold mb-2">Automatización Inteligente</h3>
                        <p>Optimización automática del sistema de aire acondicionado.</p>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg w-72">
                        <i className="fas fa-wrench text-4xl text-blue-500 mb-4"></i>
                        <h3 className="text-xl font-semibold mb-2">Monitoreo y Mantenimiento</h3>
                        <p>Mantenimiento y prevención de fallas para mayor durabilidad.</p>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg w-72">
                        <i className="fas fa-leaf text-4xl text-blue-500 mb-4"></i>
                        <h3 className="text-xl font-semibold mb-2">Integración Eficiente Energética</h3>
                        <p>Reducción del consumo de energía a través de soluciones inteligentes.</p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="py-16 bg-white text-center">
                <h2 className="text-3xl font-bold mb-8">Beneficios de la Automatización</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="bg-gray-100 shadow-md p-6 rounded-lg w-72">
                        <i className="fas fa-dollar-sign text-4xl text-blue-500 mb-4"></i>
                        <h3 className="text-xl font-semibold mb-2">Ahorro en Costos</h3>
                        <p>Reduce tus gastos energéticos.</p>
                    </div>
                    <div className="bg-gray-100 shadow-md p-6 rounded-lg w-72">
                        <i className="fas fa-wifi text-4xl text-blue-500 mb-4"></i>
                        <h3 className="text-xl font-semibold mb-2">Control Remoto</h3>
                        <p>Monitoreo en tiempo real desde cualquier lugar.</p>
                    </div>
                    <div className="bg-gray-100 shadow-md p-6 rounded-lg w-72">
                        <i className="fas fa-clock text-4xl text-blue-500 mb-4"></i>
                        <h3 className="text-xl font-semibold mb-2">Mayor Vida Útil</h3>
                        <p>Prolonga la durabilidad de tu sistema.</p>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section id="contact" className="py-16 bg-blue-900 text-white">
                <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
                <form className="max-w-md mx-auto bg-white p-8 rounded-lg text-gray-800">
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-semibold mb-2">Nombre:</label>
                        <input type="text" id="name" className="w-full border px-4 py-2 rounded-lg" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-semibold mb-2">Correo Electrónico:</label>
                        <input type="email" id="email" className="w-full border px-4 py-2 rounded-lg" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block font-semibold mb-2">Teléfono:</label>
                        <input type="tel" id="phone" className="w-full border px-4 py-2 rounded-lg" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block font-semibold mb-2">Mensaje:</label>
                        <textarea id="message" className="w-full border px-4 py-2 rounded-lg" rows={4}></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                        Enviar Solicitud
                    </button>
                </form>
                <p>info@atomcontroles.com</p>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-4">
                <p>© 2023 Nombre de la Empresa - Todos los derechos reservados</p>
                <div className="flex justify-center gap-4 mt-2">
                    <Link href="#">Política de Privacidad</Link>
                    <Link href="#">Términos y Condiciones</Link>
                </div>
            </footer>
        </main>
    );
};

export default Home;
