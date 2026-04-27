import { PhiTechnologySolutionsImage } from '@/atoms/Images/PhiTechnologySolutionsImage';
import { ExperienceArticle } from '@/organisms/ExperienceArticle';

export function PhiTechnologySolutionsArticle() {
  return (
    <ExperienceArticle
      image={<PhiTechnologySolutionsImage />}
      title="Phi Technology Solutions, LLC | Owner"
      href="https://phitechsolutions.com/"
      location="Phoenix, AZ | November 2024 - Present"
      roles={[
        'Provide technical support, web development, web design, and SEO consulting for businesses with a focus on high-performance, scalable solutions.',
        'Built groundscontrol.com, a custom website for a local commercial landscape company, leveraging Next.js and Cloudinary to optimize high-resolution portfolio images through automatic format conversion and translation for performance and accessibility.',
        'Implemented SEO best practices, including structured data, metadata optimization, and performance improvements, to enhance search visibility and organic traffic for clients.',
        'Developed a customer-facing portal with CRM capabilities, allowing clients to streamline communication, service requests, and project management.',
        'Deployed and maintained Ubiquiti routers, switches, and access points, upgrading networking equipment to ensure high-speed, reliable connectivity for clients.',
        'Managed the distribution of company-issued laptops, ensuring proper configuration, security, and ongoing technical support for employees.',
        'Leveraged Vercel and Cloudinary to provide optimized hosting, media delivery, and scalable cloud-based infrastructure for clients.',
      ]}
      technologies="Next.js, React, TypeScript, Cloudinary, Vercel, SEO, Structured Data, Ubiquiti Networking, CRM, Web Design"
    />
  );
}
