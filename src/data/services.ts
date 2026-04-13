export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceProcess {
  step: string;
  title: string;
  timeline: string;
  description: string;
  icon: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  overview: string;
  detailedDescription: string[];
  features: ServiceFeature[];
  benefits: {
    summary: string;
    points: ServiceBenefit[];
  };
  process: ServiceProcess[];
  useCases: string[];
  icon: string;
  imageSeed: string;
  lottieUrl: string;
  localAnimation?: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'web-development',
    title: 'Web & Application Development',
    overview: 'We engineer high-performance, scalable web applications tailored for modern startups and global enterprises. Our development process prioritizes speed, security, and exceptional user experience.',
    detailedDescription: [
      'In today\'s digital-first economy, your web presence is the most critical touchpoint for your customers. Our Web & Application Development service goes beyond simple website creation; we engineer complex, high-performance digital platforms that serve as the backbone of your business operations. We specialize in building custom SaaS products, enterprise-grade portals, and high-conversion web applications optimized for speed, security, and global scalability.',
      'Our engineering philosophy is rooted in modern best practices. We leverage a cutting-edge technology stack including React, Next.js, Node.js, and TypeScript to ensure your application is not only fast today but maintainable and extensible for years to come. By prioritizing clean code architecture and automated testing, we minimize technical debt and allow your business to pivot and scale with absolute confidence.',
      'Security and performance are the pillars of our process. From implementing robust authentication protocols to optimizing asset delivery through global CDNs, we ensure your application provides a seamless experience even under extreme load. Whether you are a startup launching an MVP or an enterprise modernizing legacy systems, we provide the technical expertise to turn your vision into a definitive competitive advantage.'
    ],
    features: [
      {
        title: 'Custom Full-Stack Engineering',
        description: 'Bespoke end-to-end solutions using modern frameworks, ensuring your frontend and backend are perfectly synchronized for peak performance.'
      },
      {
        title: 'Progressive Web Applications (PWA)',
        description: 'Deliver app-like experiences in the browser with offline capabilities, push notifications, and lightning-fast load times across all devices.'
      },
      {
        title: 'API-First Architecture',
        description: 'We design and implement robust, secure APIs that allow your application to integrate seamlessly with third-party services and internal systems.'
      },
      {
        title: 'Core Web Vitals Optimization',
        description: 'Our code is meticulously optimized for performance, ensuring high search engine rankings and a frictionless user experience.'
      }
    ],
    benefits: {
      summary: 'Investing in high-quality web engineering directly impacts your bottom line by improving user retention, reducing operational friction, and providing a scalable foundation for growth.',
      points: [
        {
          title: 'Unmatched User Engagement',
          description: 'Fast, intuitive interfaces keep users on your platform longer, leading to higher conversion rates and customer satisfaction.'
        },
        {
          title: 'Future-Proof Scalability',
          description: 'Our focus on clean architecture means lower maintenance costs and faster feature deployment as your business evolves.'
        },
        {
          title: 'Enterprise-Grade Security',
          description: 'Protect your data and your users with industry-standard security protocols and regular vulnerability assessments.'
        }
      ]
    },
    process: [
      { step: 'Step 1', title: 'Discovery', timeline: '1-2 weeks', description: 'Understand your business goals, target audience, and technical requirements.', icon: 'Search' },
      { step: 'Step 2', title: 'Planning', timeline: '1-2 weeks', description: 'Define the tech stack, create wireframes, and outline the project architecture.', icon: 'Map' },
      { step: 'Step 3', title: 'Development', timeline: '2-4 months', description: 'Build the frontend and backend using modern, scalable frameworks with continuous integration.', icon: 'Code' },
      { step: 'Step 4', title: 'Testing', timeline: '2-3 weeks', description: 'Rigorous QA testing, security audits, and performance optimization.', icon: 'ShieldCheck' },
      { step: 'Step 5', title: 'Deployment', timeline: 'Ongoing', description: 'Launch the application, monitor performance, and provide continuous updates and support.', icon: 'Rocket' }
    ],
    useCases: [
      'SaaS Platforms',
      'Internal Business Tools',
      'Customer Portals',
      'Real-time Collaboration Apps'
    ],
    icon: 'Globe',
    imageSeed: 'saas-dashboard-ui-coding-developer',
    lottieUrl: 'https://assets9.lottiefiles.com/packages/lf20_qXEFuZeffj.json',
    localAnimation: 'WebDev'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    overview: 'Transform your retail business with robust e-commerce platforms designed to maximize conversion and customer loyalty. We create seamless shopping experiences that drive global sales.',
    detailedDescription: [
      'The e-commerce landscape is more competitive than ever, requiring more than just a digital storefront to succeed. Our E-Commerce Solutions provide a comprehensive ecosystem that manages everything from product discovery to final checkout and post-purchase engagement. We focus on creating frictionless shopping journeys that eliminate barriers to purchase and build long-term customer loyalty through personalized experiences.',
      'We specialize in both platform-based development and custom headless commerce architectures. By decoupling the frontend presentation layer from the backend commerce engine, we provide unparalleled flexibility in design and performance. This approach allows for faster load times, superior SEO, and the ability to deliver a consistent shopping experience across web, mobile, and IoT devices.',
      'Our solutions integrate deeply with your existing business operations, including inventory management, ERP systems, and marketing automation tools. We leverage data analytics to provide insights into customer behavior, allowing you to optimize your sales funnel and maximize ROI. With Infysonic, your e-commerce platform becomes a powerful engine for global growth, capable of handling high-volume traffic and complex international transactions.'
    ],
    features: [
      {
        title: 'Headless Commerce Architecture',
        description: 'Gain total creative control and superior performance by separating your storefront from the backend commerce logic.'
      },
      {
        title: 'Omnichannel Integration',
        description: 'Synchronize your inventory, pricing, and customer data across your online store, social marketplaces, and physical locations.'
      },
      {
        title: 'Conversion Rate Optimization (CRO)',
        description: 'We use data-driven design and A/B testing to optimize your checkout flow and product pages for maximum sales.'
      },
      {
        title: 'Secure Payment Ecosystems',
        description: 'Implement multi-currency, multi-provider payment gateways with the highest level of PCI compliance and fraud protection.'
      }
    ],
    benefits: {
      summary: 'Our e-commerce platforms are built to scale your revenue by providing a premium shopping experience that converts visitors into lifelong brand advocates.',
      points: [
        {
          title: 'Increased Average Order Value',
          description: 'Leverage intelligent upselling and cross-selling features to increase revenue per customer visit.'
        },
        {
          title: 'Operational Efficiency',
          description: 'Automate order processing and inventory updates to reduce manual errors and free up your team for strategic tasks.'
        },
        {
          title: 'Global Market Reach',
          description: 'Easily expand into new markets with multi-language support and localized tax and shipping configurations.'
        }
      ]
    },
    process: [
      { step: 'Step 1', title: 'Strategy', timeline: '1-2 weeks', description: 'Analyze your product catalog, target market, and competitor landscape to define the best e-commerce approach.', icon: 'Target' },
      { step: 'Step 2', title: 'Design', timeline: '2-3 weeks', description: 'Create high-converting user interfaces focusing on seamless checkout and mobile optimization.', icon: 'Palette' },
      { step: 'Step 3', title: 'Development', timeline: '2-3 months', description: 'Implement headless commerce architecture, integrate payment gateways, and configure inventory systems.', icon: 'ShoppingCart' },
      { step: 'Step 4', title: 'Optimization', timeline: '2-3 weeks', description: 'Perform A/B testing, speed optimization, and ensure PCI compliance before going live.', icon: 'Activity' },
      { step: 'Step 5', title: 'Growth', timeline: 'Ongoing', description: 'Monitor sales analytics, refine the user funnel, and scale the platform for global reach.', icon: 'TrendingUp' }
    ],
    useCases: [
      'D2C Brand Stores',
      'B2B Wholesale Platforms',
      'Subscription-based Services',
      'Marketplace Development'
    ],
    icon: 'ShoppingCart',
    imageSeed: 'ecommerce-store-checkout-shopping-cart',
    lottieUrl: 'https://assets10.lottiefiles.com/packages/lf20_yq77v7.json',
    localAnimation: 'Ecommerce'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    overview: 'Optimize your infrastructure with cloud and DevOps services for maximum uptime and operational efficiency. We build resilient, self-healing systems for the modern web.',
    detailedDescription: [
      'Modern software delivery requires a robust, automated infrastructure that can keep pace with rapid development cycles. Our Cloud & DevOps services bridge the gap between development and operations, creating a seamless pipeline that accelerates time-to-market while ensuring system stability. We help organizations transition from legacy setups to agile, cloud-native architectures that are resilient, scalable, and cost-effective.',
      'We specialize in Infrastructure as Code (IaC), allowing you to manage your entire cloud environment through version-controlled scripts. This approach eliminates manual configuration errors and enables "one-click" environment replication for testing and disaster recovery. Our team implements advanced CI/CD pipelines that automate testing and deployment, ensuring that every code change is verified and delivered to production with minimal risk.',
      'Security is integrated into every layer of our DevOps practice (DevSecOps). We implement automated security scanning, identity management, and encryption to protect your cloud assets. By leveraging cloud-native services from AWS, Azure, and Google Cloud, we build self-healing systems that automatically scale based on demand and recover from failures without human intervention.'
    ],
    features: [
      {
        title: 'Infrastructure as Code (IaC)',
        description: 'Manage your cloud resources using Terraform or Pulumi, ensuring consistent, repeatable, and documented infrastructure.'
      },
      {
        title: 'Automated CI/CD Pipelines',
        description: 'Streamline your release process with automated build, test, and deployment stages that reduce manual effort and errors.'
      },
      {
        title: 'Kubernetes & Orchestration',
        description: 'Modernize your applications using Docker and Kubernetes for better resource utilization and simplified scaling.'
      },
      {
        title: 'Cloud Migration & Strategy',
        description: 'Expert guidance on migrating legacy workloads to the cloud with zero downtime and optimized cost structures.'
      }
    ],
    benefits: {
      summary: 'DevOps is a strategic investment that transforms your IT department from a cost center into a high-speed engine for business innovation.',
      points: [
        {
          title: 'Accelerated Time-to-Market',
          description: 'Reduce release cycles from months to days, allowing you to respond faster to market changes and customer feedback.'
        },
        {
          title: '99% System Reliability',
          description: 'Automated monitoring and self-healing systems significantly reduce downtime and improve the overall user experience.'
        },
        {
          title: 'Infrastructure Cost Savings',
          description: 'Leverage cloud-native scaling and resource management to pay only for what you use, reducing wasted spend.'
        }
      ]
    },
    process: [
      { step: 'Step 1', title: 'Assessment', timeline: '1-2 weeks', description: 'Audit your existing infrastructure, identify bottlenecks, and define cloud migration goals.', icon: 'Search' },
      { step: 'Step 2', title: 'Architecture', timeline: '2-3 weeks', description: 'Design a resilient, scalable cloud architecture using Infrastructure as Code principles.', icon: 'Layers' },
      { step: 'Step 3', title: 'Implementation', timeline: '1-3 months', description: 'Set up CI/CD pipelines, containerize applications, and deploy the new infrastructure.', icon: 'Server' },
      { step: 'Step 4', title: 'Security', timeline: '2-3 weeks', description: 'Implement identity management, automated security scanning, and strict compliance controls.', icon: 'Shield' },
      { step: 'Step 5', title: 'Operations', timeline: 'Ongoing', description: '24/7 monitoring, automated backups, and continuous cost optimization of cloud resources.', icon: 'Activity' }
    ],
    useCases: [
      'Scaling SaaS Infrastructure',
      'Legacy System Migration',
      'High-Availability Platforms',
      'Automated Testing Environments'
    ],
    icon: 'Cloud',
    imageSeed: 'cloud-infrastructure-server-network-devops',
    lottieUrl: 'https://assets1.lottiefiles.com/packages/lf20_8u6v6v.json',
    localAnimation: 'Cloud'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    overview: 'Create intuitive and engaging digital experiences with our user-centric UI/UX design services. We focus on accessibility, usability, and brand consistency.',
    detailedDescription: [
      'In a world of infinite digital choices, user experience is the ultimate differentiator. Our UI/UX Design service is focused on creating meaningful connections between your brand and your users through intuitive, accessible, and aesthetically pleasing interfaces. We believe that great design is not just about how a product looks, but how it solves problems and empowers users to achieve their goals with minimal friction.',
      'Our design process is deeply rooted in research and data. We begin by understanding your users\' pain points, behaviors, and motivations through interviews and usability audits. This insight drives our wireframing and prototyping stages, where we iterate on user flows to ensure every interaction is logical and rewarding. We don\'t just design screens; we design cohesive journeys that guide users toward high-value actions.',
      'We also specialize in building comprehensive Design Systems that ensure brand consistency across all digital touchpoints. By creating a library of reusable components and clear design guidelines, we accelerate the development process and ensure that your product can grow without losing its visual or functional integrity. From mobile apps to complex enterprise dashboards, we bring a balance of functional clarity and modern elegance to every pixel.'
    ],
    features: [
      {
        title: 'User Research & Strategy',
        description: 'Data-driven insights into user behavior that inform product direction and ensure your features meet real market needs.'
      },
      {
        title: 'Interactive Prototyping',
        description: 'High-fidelity, clickable prototypes that allow you to visualize and test the user experience before a single line of code is written.'
      },
      {
        title: 'Design Systems Development',
        description: 'A scalable framework of components and styles that ensures visual consistency and speeds up future development.'
      },
      {
        title: 'Accessibility Compliance',
        description: 'We ensure your digital products are usable by everyone, following WCAG standards to reach a wider audience and reduce legal risk.'
      }
    ],
    benefits: {
      summary: 'Superior design leads to higher user adoption, increased customer loyalty, and a significant reduction in long-term development and support costs.',
      points: [
        {
          title: 'Increased Conversion Rates',
          description: 'By removing friction from user flows, we guide customers more effectively toward purchases, sign-ups, and key actions.'
        },
        {
          title: 'Lower Support Costs',
          description: 'Intuitive interfaces reduce user confusion, leading to fewer support tickets and a more self-sufficient customer base.'
        },
        {
          title: 'Stronger Brand Equity',
          description: 'A polished, professional design builds trust and positions your company as a leader in your industry.'
        }
      ]
    },
    process: [
      { step: 'Step 1', title: 'Research', timeline: '1-2 weeks', description: 'Conduct user interviews, competitor analysis, and define user personas and journeys.', icon: 'Search' },
      { step: 'Step 2', title: 'Wireframing', timeline: '2-3 weeks', description: 'Create low-fidelity wireframes to establish the layout and information architecture.', icon: 'Layout' },
      { step: 'Step 3', title: 'Prototyping', timeline: '2-3 weeks', description: 'Develop interactive, high-fidelity prototypes that closely mimic the final product.', icon: 'MousePointer' },
      { step: 'Step 4', title: 'Testing', timeline: '1-2 weeks', description: 'Conduct usability testing sessions, gather feedback, and refine the design accordingly.', icon: 'CheckSquare' },
      { step: 'Step 5', title: 'Handoff', timeline: 'Ongoing', description: 'Deliver a comprehensive design system and work closely with developers to ensure accurate implementation.', icon: 'FileCode' }
    ],
    useCases: [
      'New Product Launches',
      'Legacy App Redesigns',
      'Marketing Landing Pages',
      'Mobile App Interfaces'
    ],
    icon: 'Palette',
    imageSeed: 'figma-wireframe-design-system-ux',
    lottieUrl: 'https://assets1.lottiefiles.com/packages/lf20_u4v6v6.json',
    localAnimation: 'Design'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    overview: 'Reach your customers on the go with high-quality native and cross-platform mobile applications. We build apps that deliver exceptional performance.',
    detailedDescription: [
      'Mobile devices have become the primary way users interact with the digital world. Our Mobile App Development service helps you capture this massive audience by building high-performance applications that feel native to every device. We focus on creating mobile experiences that are not just functional, but indispensable to your users\' daily lives, leveraging the full potential of smartphone hardware and software.',
      'We offer expertise in both native (Swift for iOS, Kotlin for Android) and cross-platform (React Native, Flutter) development. This allows us to recommend the best approach based on your specific performance requirements, budget, and timeline. Our apps are built with an "offline-first" mentality, ensuring that users can continue to interact with your brand even with poor connectivity, with data syncing seamlessly once they are back online.',
      'Beyond the code, we provide strategic guidance on the entire mobile lifecycle, from initial concept and UI design to App Store Optimization (ASO) and post-launch maintenance. We integrate advanced features like push notifications, biometric authentication, and location-based services to create engaging, secure, and contextually aware applications that drive user retention and business growth.'
    ],
    features: [
      {
        title: 'Cross-Platform Excellence',
        description: 'Build for both iOS and Android from a single codebase using React Native or Flutter, reducing time-to-market without sacrificing quality.'
      },
      {
        title: 'Native Performance Optimization',
        description: 'For high-intensity applications, we build native apps that leverage the maximum processing power and fluid animations of the device.'
      },
      {
        title: 'Offline-First Architecture',
        description: 'Ensure your app remains functional without an internet connection, providing a reliable experience in any environment.'
      },
      {
        title: 'Device Hardware Integration',
        description: 'Seamlessly utilize camera, GPS, biometrics, and sensors to create rich, interactive features that enhance user utility.'
      }
    ],
    benefits: {
      summary: 'A well-executed mobile app provides a direct, high-engagement channel to your customers, fostering loyalty and opening new revenue streams.',
      points: [
        {
          title: 'Direct Customer Connection',
          description: 'Stay top-of-mind with push notifications and a permanent presence on your customers\' most personal devices.'
        },
        {
          title: 'Enhanced User Loyalty',
          description: 'Mobile-exclusive features and personalized experiences build deeper relationships with your audience.'
        },
        {
          title: 'New Revenue Channels',
          description: 'Leverage in-app purchases, mobile commerce, and subscription models to diversify your income streams.'
        }
      ]
    },
    process: [
      { step: 'Step 1', title: 'Concept', timeline: '1-2 weeks', description: 'Define the core app features, target platforms (iOS/Android), and monetization strategy.', icon: 'Lightbulb' },
      { step: 'Step 2', title: 'UI/UX Design', timeline: '2-3 weeks', description: 'Design mobile-first interfaces ensuring intuitive navigation and engaging user interactions.', icon: 'Smartphone' },
      { step: 'Step 3', title: 'Engineering', timeline: '3-4 months', description: 'Develop native or cross-platform applications with offline capabilities and smooth performance.', icon: 'Code' },
      { step: 'Step 4', title: 'QA Testing', timeline: '2-3 weeks', description: 'Test across multiple devices and screen sizes to ensure stability and hardware compatibility.', icon: 'SmartphoneNfc' },
      { step: 'Step 5', title: 'Launch', timeline: 'Ongoing', description: 'Manage App Store submissions, monitor crash analytics, and provide continuous updates.', icon: 'Rocket' }
    ],
    useCases: [
      'On-demand Service Apps',
      'Social Networking Platforms',
      'Health & Fitness Trackers',
      'Mobile Banking & Fintech'
    ],
    icon: 'Smartphone',
    imageSeed: 'smartphone-app-ui-ios-android-mockup',
    lottieUrl: 'https://assets1.lottiefiles.com/packages/lf20_m6v6v6.json',
    localAnimation: 'Mobile'
  },
  {
    id: 'erp-solutions',
    title: 'ERP Solutions',
    overview: 'Streamline your business processes and centralize your data with custom ERP solutions. We build tailored systems that integrate finance, HR, and sales.',
    detailedDescription: [
      'As businesses grow, managing disconnected systems for finance, HR, inventory, and sales becomes a major bottleneck. Our Custom ERP Solutions are designed to eliminate these silos by centralizing all your critical business data into a single, unified platform. We build tailored Enterprise Resource Planning systems that reflect your unique business logic, rather than forcing you to adapt to the limitations of "off-the-shelf" software.',
      'Our ERPs focus on business process automation, reducing manual data entry and the risk of human error. By integrating all departments into one source of truth, we provide leadership with real-time visibility into every aspect of the organization. This data-driven approach allows for more accurate forecasting, better resource allocation, and faster response times to market opportunities and operational challenges.',
      'We prioritize security and scalability in our ERP architecture. Your system is built to grow with your company, easily accommodating new users, departments, and complex international operations. With Infysonic, you get a powerful, secure, and user-friendly tool that transforms your operational complexity into a streamlined competitive advantage, allowing your team to focus on growth rather than administrative overhead.'
    ],
    features: [
      {
        title: 'Unified Data Ecosystem',
        description: 'Break down departmental silos by integrating finance, HR, inventory, and sales into a single, real-time source of truth.'
      },
      {
        title: 'Custom Workflow Automation',
        description: 'Automate repetitive tasks and complex business processes to increase accuracy and free up your team for high-value work.'
      },
      {
        title: 'Advanced Analytics & Reporting',
        description: 'Generate deep insights with customizable dashboards and automated reports that inform strategic decision-making.'
      },
      {
        title: 'Role-Based Access Control',
        description: 'Ensure data security with granular permissions that give employees access only to the information they need for their roles.'
      }
    ],
    benefits: {
      summary: 'A custom ERP system provides the operational backbone needed to scale efficiently, reduce costs, and make confident, data-driven decisions.',
      points: [
        {
          title: 'Operational Efficiency',
          description: 'Streamline workflows and eliminate redundant processes, leading to significant time and cost savings across the organization.'
        },
        {
          title: 'Improved Data Integrity',
          description: 'Centralized data management eliminates discrepancies and ensures that everyone in the company is working with the same information.'
        },
        {
          title: 'Scalable Foundation',
          description: 'Our ERPs are built to evolve, allowing you to add new modules and capabilities as your business requirements change.'
        }
      ]
    },
    process: [
      { step: 'Step 1', title: 'Discovery', timeline: '2-4 weeks', description: 'Analyze your existing workflows, identify departmental silos, and gather comprehensive business requirements.', icon: 'Search' },
      { step: 'Step 2', title: 'Blueprint', timeline: '3-4 weeks', description: 'Design a unified data ecosystem and map out custom workflows for finance, HR, and operations.', icon: 'Map' },
      { step: 'Step 3', title: 'Development', timeline: '3-6 months', description: 'Build the custom ERP solution, integrating all necessary modules and third-party systems.', icon: 'Settings' },
      { step: 'Step 4', title: 'Training', timeline: '2-4 weeks', description: 'Conduct comprehensive team training, user acceptance testing, and data migration.', icon: 'Users' },
      { step: 'Step 5', title: 'Support', timeline: 'Ongoing', description: 'Provide ongoing technical support, system maintenance, and deploy new features as your business grows.', icon: 'Headphones' }
    ],
    useCases: [
      'Manufacturing Management',
      'Retail Chain Operations',
      'Professional Service Firms',
      'Logistics & Distribution'
    ],
    icon: 'Layers',
    imageSeed: 'enterprise-dashboard-analytics-business-management',
    lottieUrl: 'https://assets1.lottiefiles.com/packages/lf20_e6v6v6.json',
    localAnimation: 'ERP'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation Services',
    overview: 'Leverage the power of AI to automate your workflows and gain valuable strategic insights. From LLM-powered chatbots to predictive analytics.',
    detailedDescription: [
      'Artificial Intelligence is no longer a futuristic concept; it is a critical tool for modern business efficiency. Our AI Automation Services help you harness the power of machine learning and large language models (LLMs) to transform how your business operates. We focus on practical, high-impact AI integrations that solve real-world problems, from automating customer support to providing predictive insights that drive strategy.',
      'We specialize in building custom AI agents and intelligent workflows that can handle complex data analysis, content generation, and decision-making tasks. By integrating AI into your existing software ecosystem, we enable your team to achieve more with less, significantly reducing the time spent on routine administrative work. Our solutions are designed to be secure and private, ensuring your proprietary data is never compromised while training or using AI models.',
      'The true value of AI lies in its ability to find patterns and insights that are invisible to the human eye. We implement predictive analytics models that help you forecast demand, identify churn risks, and optimize pricing in real-time. With Infysonic as your AI partner, you gain a significant competitive advantage by being more responsive, more efficient, and more data-driven than the competition.'
    ],
    features: [
      {
        title: 'Generative AI & LLM Integration',
        description: 'Leverage models like GPT-4 or Claude to automate content creation, document analysis, and complex reasoning tasks.'
      },
      {
        title: 'Intelligent Process Automation',
        description: 'Combine AI with traditional automation to handle unstructured data and make "smart" decisions within your workflows.'
      },
      {
        title: 'Predictive Analytics Models',
        description: 'Use machine learning to analyze historical data and predict future trends, customer behaviors, and market shifts.'
      },
      {
        title: 'Custom AI Chatbots',
        description: 'Deploy sophisticated, context-aware assistants that provide 24/7 customer support and internal knowledge management.'
      }
    ],
    benefits: {
      summary: 'AI automation delivers immediate ROI by drastically increasing productivity, reducing errors, and providing a level of insight that was previously impossible.',
      points: [
        {
          title: 'Massive Productivity Gains',
          description: 'Automate hours of manual work in seconds, allowing your team to focus on creative and strategic initiatives.'
        },
        {
          title: '24/7 Operational Capability',
          description: 'AI systems work around the clock, providing instant responses to customers and continuous data processing.'
        },
        {
          title: 'Data-Driven Advantage',
          description: 'Make decisions based on hard data and predictive models rather than intuition, leading to better business outcomes.'
        }
      ]
    },
    process: [
      { step: 'Step 1', title: 'Vision', timeline: '2-3 weeks', description: 'Identify the business need, pinpoint relevant AI/ML use cases, and establish a solid data strategy.', icon: 'Eye' },
      { step: 'Step 2', title: 'Value', timeline: '1-2 weeks', description: 'Identify the most valuable AI use cases, pass it through a feasibility gate, and develop a POC plan.', icon: 'Diamond' },
      { step: 'Step 3', title: 'Validation', timeline: '2-3 months', description: 'Assess business workflows, define model parameters, prepare data, and build the POC for validation.', icon: 'FileCheck' },
      { step: 'Step 4', title: 'Adoption', timeline: '2-3 months', description: 'Get POC to production-ready, integrate real world data and deploy the model to Production.', icon: 'Cpu' },
      { step: 'Step 5', title: 'Maintenance', timeline: 'Ongoing', description: 'Maintain and monitor the models in production, optimize performance, and ensure model governance.', icon: 'Settings' }
    ],
    useCases: [
      'Customer Support Automation',
      'Sales Lead Scoring',
      'Automated Document Analysis',
      'Personalized Marketing at Scale'
    ],
    icon: 'Cpu',
    imageSeed: 'ai-workflow-automation-intelligent-system',
    lottieUrl: 'https://assets1.lottiefiles.com/packages/lf20_a6v6v6.json',
    localAnimation: 'AI'
  }
];
