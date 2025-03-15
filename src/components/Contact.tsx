import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const services = [
  "Luft Fototjenester",
  "Drone Video",
  "Infrastruktur Inspeksjon",
  "Mapping & Surveying",
  "Environmental Monitoring",
  "Industrial Inspection",
  "Construction Progress",
  "Wind Turbine Inspection",
  "Telecommunications",
];

function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData(initialFormData);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='pt-16 min-h-screen bg-industrial-100'>
      {/* Header */}
      <div className='py-16 bg-industrial-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold text-white'>
              Kontakt <span className='text-energy-500'>Oss</span>
            </h1>
            <p className='mt-4 text-xl text-industrial-300'>
              Ta kontakt med vårt team av droneeksperter i dag
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div className='card-industrial p-8'>
            {submitted ? (
              <div className='bg-energy-500/20 border-2 border-energy-500 rounded-md p-4 text-industrial-950 font-bold'>
                Takk for din melding! Vi tar kontakt med deg så fort som mulig.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-bold text-industrial-950'>
                    Fullt navn
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className='mt-1 block w-full rounded-md border-2 border-industrial-300 shadow-sm focus:border-energy-500 focus:ring focus:ring-energy-500/50'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-bold text-industrial-950'>
                    Email Addresse
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className='mt-1 block w-full rounded-md border-2 border-industrial-300 shadow-sm focus:border-energy-500 focus:ring focus:ring-energy-500/50'
                  />
                </div>

                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-bold text-industrial-950'>
                    Telefonnummer
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    id='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='mt-1 block w-full rounded-md border-2 border-industrial-300 shadow-sm focus:border-energy-500 focus:ring focus:ring-energy-500/50'
                  />
                </div>

                <div>
                  <label
                    htmlFor='service'
                    className='block text-sm font-bold text-industrial-950'>
                    Tjeneste til forespørsel
                  </label>
                  <select
                    name='service'
                    id='service'
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className='mt-1 block w-full rounded-md border-2 border-industrial-300 shadow-sm focus:border-energy-500 focus:ring focus:ring-energy-500/50'>
                    <option value=''>Velg en tjeneste</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-bold text-industrial-950'>
                    Din melding
                  </label>
                  <textarea
                    name='message'
                    id='message'
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className='mt-1 block w-full rounded-md border-2 border-industrial-300 shadow-sm focus:border-energy-500 focus:ring focus:ring-energy-500/50'></textarea>
                </div>

                <button type='submit' className='btn-primary w-full'>
                  Send Melding
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className='space-y-8'>
            <div className='card-industrial p-8'>
              <h2 className='text-2xl font-bold text-industrial-950 mb-6'>
                Kontaktinformasjon
              </h2>
              <div className='space-y-6'>
                <div className='flex items-start'>
                  <Mail className='h-6 w-6 text-energy-500 mt-1' />
                  <div className='ml-4'>
                    <h3 className='text-lg font-bold text-industrial-950'>
                      Email
                    </h3>
                    <p className='mt-1 text-industrial-600'>
                      hei@uas-valdres.no
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <MapPin className='h-6 w-6 text-energy-500 mt-1' />
                  <div className='ml-4'>
                    <h3 className='text-lg font-bold text-industrial-950'>
                      Addresse
                    </h3>
                    <p className='mt-1 text-industrial-600'>
                      Jernbanevegen 6
                      <br />
                      2900, Fagernes
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <Clock className='h-6 w-6 text-energy-500 mt-1' />
                  <div className='ml-4'>
                    <h3 className='text-lg font-bold text-industrial-950'>
                      Åpningstider
                    </h3>
                    <p className='mt-1 text-industrial-600'>
                      Mandag - Fredag: 8:00 AM - 6:00 PM
                      <br />
                      Lørdag: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Etter avtale
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='card-industrial p-8'>
              <h2 className='text-2xl font-bold text-industrial-950 mb-4'>
                Nødtjenester
              </h2>
              <p className='text-industrial-600'>
                I nødstilfeller, ved behov for våre tjenester i forbindelse med
                hendelser, leteaksjoner ol, ring oss så stiller vi opp
              </p>
              <p className='text-xl font-bold text-energy-500 mt-2'>
                +47 959 61 415
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
