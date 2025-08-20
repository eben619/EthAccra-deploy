import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqSection {
  id: string;
  title: string;
  items: FaqItem[];
}

const FaqSection: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string): void => {
    setOpenItem(openItem === id ? null : id);
  };

  const renderTextWithLinks = (text: string) => {
    const parts = text.split(
      /(https:\/\/t\.me\/c\/1785270528\/1|https:\/\/chat\.whatsapp\.com\/ILyl3Jlkwjm7HhyOXJNCMm|https:\/\/taikai\.network\/ethaccra\/hackathons\/hackathon2024|info@ethaccra\.xyz)/g
    );

    return parts.map((part, index) => {
      if (part === "https://t.me/c/1785270528/1") {
        return (
          <a
            key={index}
            href="https://t.me/c/1785270528/1"
            className="text-orange-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        );
      } else if (
        part === "https://chat.whatsapp.com/ILyl3Jlkwjm7HhyOXJNCMm"
      ) {
        return (
          <a
            key={index}
            href="https://chat.whatsapp.com/ILyl3Jlkwjm7HhyOXJNCMm"
            className="text-orange-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        );
      } else if (
        part === "https://taikai.network/ethaccra/hackathons/hackathon2024"
      ) {
        return (
          <a
            key={index}
            href="https://taikai.network/ethaccra/hackathons/hackathon2024"
            className="text-orange-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            TAIKAI platform
          </a>
        );
      } else if (part === "info@ethaccra.xyz") {
        return (
          <a key={index} href="mailto:info@ethaccra.xyz" className="text-orange-500 underline">
            Email
          </a>
        );
      } else {
        return part;
      }
    });
  };

  const faqSections: FaqSection[] = [
    {
      id: "general",
      title: "General Information",
      items: [
        {
          id: "general-1",
          question: "What is ETHAccra?",
          answer:
            "ETHAccra is a four-day Ethereum-focused event in Accra, Ghana. It includes a Builder's Day, a 48-hour hackathon, workshops, and community activities — a space for developers, researchers, and builders to collaborate, learn, and showcase innovation in the Ethereum ecosystem.",
        },
        {
          id: "general-2",
          question: "When is ETHAccra happening?",
          answer:
            "The event runs from September 3–6, 2025.\n\n• Sept 3: Builder's Day\n• Sept 4–6: Hackathon (building starts morning of the 4th, submissions by morning of the 6th)\n• Sept 6: Closing ceremony & afterparty",
        },
        {
          id: "general-3",
          question: "Where will ETHAccra take place?",
          answer:
            "ETHAccra will be hosted in Accra, Ghana. Exact venue details will be shared with confirmed participants.",
        },
        {
          id: "general-4",
          question: "Is there a participation fee?",
          answer: "Participation in ETHAccra hackathon is completely free for accepted hackers. Please note, however, that Builder’s Day is a separate ticketed event.",
        },
      ],
    },
    {
      id: "participation",
      title: "Participation & Registration",
      items: [
        {
          id: "participation-1",
          question: "Who can participate?",
          answer:
            "Anyone passionate about Ethereum and Web3 — developers, designers, researchers, and community builders. All skill levels are welcome.",
        },
        {
          id: "participation-2",
          question: "How do I register?",
          answer:
            "Register individually through our website. Accepted participants will receive confirmation by email.",
        },
        {
          id: "participation-3",
          question: "Do I need a team before the event?",
          answer:
            "No. You can come solo and form a team at the hackathon during team formation sessions.",
        },
        {
          id: "participation-4",
          question: "What if I am selected but cannot attend?",
          answer:
            "Please let us know right away so your spot can be offered to someone on the waitlist.",
        },
        {
          id: "participation-5",
          question: "Can I bring a guest or advertise at the event?",
          answer:
            "Guests: No, all attendees must apply individually.\n\nAdvertising: Contact us at info@ethaccra.xyz before distributing any flyers or promotional material.",
        },
        {
          id: "participation-6",
          question: "Can I recruit or do recruiting activities at ETHAccra?",
          answer:
            "Direct recruitment is not allowed to maintain a positive environment. If an attendee approaches you first and there's mutual interest, conversations are welcome.",
        },
      ],
    },
    {
      id: "hackathon",
      title: "Hackathon Details",
      items: [
        {
          id: "hackathon-1",
          question: "What should I build?",
          answer:
            "Projects can cover any area of Ethereum or Web3. We encourage solutions that tackle real-world challenges in areas like scaling, DeFi, identity, and social impact. Sponsors will also offer specific tracks with challenges and prizes.",
        },
        {
          id: "hackathon-2",
          question: "Are there prizes?",
          answer: "Yes! Multiple prize tracks and bounties will be available.",
        },
        {
          id: "hackathon-3",
          question: "Can I build solo?",
          answer: "Yes, solo projects are welcome.",
        },
        {
          id: "hackathon-4",
          question: "Can I start before the hackathon?",
          answer:
            "No, projects must be started fresh at ETHAccra to keep things fair. You can, however, prepare by learning tools and frameworks in advance.",
        },
        {
          id: "hackathon-5",
          question: "How big can a team be?",
          answer:
            "Teams can have up to 5 members with no restrictions on nationality or background.",
        },
        {
          id: "hackathon-6",
          question: "Do I need to know how to code?",
          answer:
            "Solo participants: Coding skills are required.\n\nTeams: Coding is not mandatory — design, research, and project management skills are equally valuable.",
        },
        {
          id: "hackathon-7",
          question: "What happens if my project is incomplete at the end of the hackathon?",
          answer:
            "That's okay! You don't need a fully finished product. As long as you can demo your progress and explain your idea, you're good. Judges value creativity, effort, and potential just as much as technical polish.",
        },
      ],
    },
    {
      id: "onsite",
      title: "On-Site Experience",
      items: [
        {
          id: "onsite-1",
          question: "Is ETHAccra an in-person or remote event?",
          answer:
            "ETHAccra is in-person only to maximize networking and collaboration. All team members must be physically present during judging.",
        },
        {
          id: "onsite-2",
          question: "How long is the hackathon?",
          answer:
            "The hackathon runs for 48 hours. The venue closes at 9 PM and reopens at 7 AM, but teams can continue working elsewhere.",
        },
        {
          id: "onsite-3",
          question: "Will food and drinks be provided?",
          answer: "Yes, meals and refreshments will be provided for participants.",
        },
        {
          id: "onsite-4",
          question: "Do you provide travel or accommodation?",
          answer:
            "We do not cover travel or accommodation. However, we will share recommendations for affordable lodging in Accra.",
        },
        {
          id: "onsite-5",
          question: "Will there be swag or giveaways?",
          answer:
            "Absolutely! Thanks to our amazing sponsors, expect cool swag like T-shirts, stickers, and other fun goodies throughout the event.",
        },
        {
          id: "onsite-6",
          question: "What should I bring?",
          answer:
            "Bring your laptop, chargers, valid ID, and any personal items needed for comfort during long hours of building.",
        },
        {
          id: "onsite-7",
          question: "Will there be mentorship and workshops?",
          answer:
            "Yes. Mentors from the Ethereum community and sponsors will be available for guidance, and there will be workshops throughout the event.",
        },
        {
          id: "onsite-8",
          question: "Will there be training or workshops before the hackathon?",
          answer:
            "Yes! We'll host online and in-person workshops starting 3–4 months before the event, covering Ethereum development, project building, and inspiration.",
        },
      ],
    },
    {
      id: "submissions",
      title: "Submissions & Judging",
      items: [
        {
          id: "submissions-1",
          question: "How do submissions work?",
          answer:
            "Projects must be submitted through the official hackathon portal by the deadline. Late submissions will not be accepted.",
        },
        {
          id: "submissions-2",
          question: "How will the judging process work?",
          answer:
            "A panel of industry experts will evaluate projects based on innovation, technical difficulty, usability, impact, and presentation. Full judging criteria will be shared before demo day.",
        },
        {
          id: "submissions-3",
          question: "What are the judging criteria?",
          answer:
            "Projects are evaluated on innovation, usefulness, impact, and presentation. Bonus points are given for creativity and alignment with sponsor challenges.",
        },
        {
          id: "submissions-4",
          question: "I have a question not listed here. Who can I ask?",
          answer:
            "Reach out to the ETHAccra team via email or join our https://t.me/c/1785270528/1 and https://chat.whatsapp.com/ILyl3Jlkwjm7HhyOXJNCMm groups or info@ethaccra.xyz for direct support.",
        },
      ],
    },
  ];

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % faqSections.length);
    setOpenItem(null);
  };

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + faqSections.length) % faqSections.length);
    setOpenItem(null);
  };

  const goToSection = (index: number) => {
    setCurrentSection(index);
    setOpenItem(null);
  };

  return (
    <div className="bg-pink-100 p-8 md:p-12 lg:p-16 relative z-0">
      {/* FAQ Heading */}
      <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-pink-400 mb-8 md:mb-12 lg:mb-16 ml-4">
        FAQs
      </h1>

      {/* Section Navigation Dots */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-2">
          {faqSections.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSection(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentSection === index ? "bg-pink-400" : "bg-pink-200"
              }`}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSection}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          style={{ top: "60%" }}
          aria-label="Previous section"
        >
          <ChevronLeft className="w-6 h-6 text-pink-400" />
        </button>

        <button
          onClick={nextSection}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          style={{ top: "60%" }}
          aria-label="Next section"
        >
          <ChevronRight className="w-6 h-6 text-pink-400" />
        </button>

        {/* Section Content */}
        <div className="mx-16">
          <div className="p-8 min-h-[600px]">
            {/* Section Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
                {faqSections[currentSection].title}
              </h2>
              <div className="w-20 h-1 bg-pink-400 mx-auto rounded-full"></div>
            </div>

            {/* FAQ Items for Current Section */}
            <div className="space-y-0">
              {faqSections[currentSection].items.map((item) => (
                <div key={item.id} className="border-b border-pink-300">
                  <div
                    className="flex justify-between items-center py-6 cursor-pointer"
                    onClick={() => toggleItem(item.id)}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-black ml-4">
                      {item.question}
                    </h3>
                    <button
                      className="text-3xl text-pink-400 font-bold w-8 h-8 flex items-center justify-center mr-4"
                      aria-label="Toggle FAQ item"
                    >
                      +
                    </button>
                  </div>
                  {openItem === item.id && (
                    <div className="px-4 pb-6">
                      <div className="text-black whitespace-pre-line">
                        {item.answer.split("\n\n").map((paragraph, i) => (
                          <React.Fragment key={i}>
                            <span>{renderTextWithLinks(paragraph)}</span>
                            {i < item.answer.split("\n\n").length - 1 && (
                              <>
                                <br />
                                <br />
                              </>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Indicator */}
        <div className="text-center mt-6">
          <span className="text-pink-400 font-medium">
            {currentSection + 1} of {faqSections.length}
          </span>
        </div>
      </div>

      <div id="contact-us"></div>
    </div>
  );
};

export default FaqSection;
