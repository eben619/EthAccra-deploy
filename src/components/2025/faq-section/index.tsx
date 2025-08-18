import React, { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string): void => {
    setOpenItem(openItem === id ? null : id);
  };

  const faqItems: FaqItem[] = [
    {
      id: "item-1",
      question: "What is ETHAccra?",
      answer: "ETHAccra is a community-led hackathon and conference focused on the Ethereum community. It brings together developers, designers, students, and blockchain enthusiasts to collaborate intensively on Ethereum-based projects over a few days, fostering innovation and learning."
    },
    {
      id: "item-2",
      question: "Who can participate in ETHAccra?",
      answer: "This hackathon is for everyone, technical and non-technical, experienced builders and complete beginners. Developers, designers, students, community organizers, curious minds, if you're excited to learn and build, ETHAccra is for you."
    },
    {
      id: "item-3",
      question: "Do I need to know how to code?",
      answer: "Solo participants: Coding skills are essential to build your project.\n\nTeam participants: Coding is not mandatory; non-technical skills like design, project management, and research are valuable."
    },
    {
      id: "item-4",
      question: "Can I build my project solo?",
      answer: "Yes! Solo projects are welcome, whether you prefer to work alone or just enjoy the individual challenge."
    },
    {
      id: "item-5",
      question: "How do I register?",
      answer: "Registration is open on our TAIKAI platform: https://taikai.network/ethaccra/hackathons/hackathon2024\n\nCandidates must register individually, bulk company registrations are not accepted."
    },
    {
      id: "item-6",
      question: "How are applicants selected?",
      answer: "Selection is based on:\n\n• Your profile pitch and personal bio (not CVs)\n• Demonstrated passion, potential, and motivation\n• Previous engagement in ETHAccra (if applicable)\n\nWe prioritize participation and enthusiasm over formal resumes."
    },
    {
      id: "item-7",
      question: "Is there a cost to attend?",
      answer: "No, ETHAccra is free for all selected participants, thanks to our generous sponsors."
    },
    {
      id: "item-8",
      question: "Does ETHAccra offer travel or accommodation support?",
      answer: "Accommodation is complimentary for confirmed hackers. Travel support is not provided at the moment, but any updates on discounts or partnerships will be shared as the event approaches."
    },
    {
      id: "item-9",
      question: "When and where is ETHAccra held?",
      answer: "Venue: ISSER Conference Hall, University of Ghana - Legon, a central location with nearby hotels.\n\nDates:\n• September 3: Onsite workshops and networking\n• September 4-6: Hackathon days (building starts on the 4th morning, submission on the 6th morning)\n• Closing ceremony and afterparty on September 6"
    },
    {
      id: "item-10",
      question: "Is ETHAccra an in-person or remote event?",
      answer: "ETHAccra is an in-person event to maximise networking and collaboration. All team members must be physically present during judging."
    },
    {
      id: "item-11",
      question: "How long is the hackathon? Is it a 24-hour event?",
      answer: "The coding competition runs for 48 hours.\n\nDue to venue regulations, the hall closes at 9 PM and reopens at 7 AM. Participants can continue working outside the venue during closed hours."
    },
    {
      id: "item-12",
      question: "Can I start working on my project before the event?",
      answer: "No. To ensure fairness, pre-existing projects or early work on hackathon ideas are not allowed. You may prepare by learning tools and technologies beforehand."
    },
    {
      id: "item-13",
      question: "Can I submit two projects to the hackathon?",
      answer: "No, each participant or team is allowed to submit only one project. This ensures fairness and allows all participants to focus their efforts on creating the best possible solution."
    },
    {
      id: "item-14",
      question: "How many people can be on a team?",
      answer: "Teams can have up to 5 members. There are no restrictions on nationality or experience level."
    },
    {
      id: "item-15",
      question: "Will there be food and beverages?",
      answer: "Yes! Lunch, dinner, snacks, coffee, tea, and non-alcoholic drinks will be provided free of charge throughout the event."
    },
    {
      id: "item-16",
      question: "Is there Wi-Fi at the venue?",
      answer: "Yes, there is Wi-Fi and a limited number of ethernet outlets (priority given to teams competing in the 48-hour challenge)."
    },
    {
      id: "item-17",
      question: "Are there prizes?",
      answer: "Yes, prizes will be awarded to winning teams. Details will be announced closer to the event."
    },
    {
      id: "item-18",
      question: "Will there be training or workshops before the hackathon?",
      answer: "Yes! We offer a series of online and in-person workshops starting 3-4 months before the event, covering Ethereum development, project building, and inspiration."
    },
    {
      id: "item-19",
      question: "Can I bring a guest or advertise at the event?",
      answer: "Guests: No, all attendees must apply individually.\n\nAdvertising: Please contact us at info@ethaccra.xyz before distributing any flyers or promotional materials."
    },
    {
      id: "item-20",
      question: "Can I recruit or do recruiting activities at ETHAccra?",
      answer: "Direct recruitment is not allowed to maintain a positive environment. However, if an attendee approaches you first and there is mutual interest, conversations are welcome."
    },
    {
      id: "item-21",
      question: "What if I am selected but cannot attend?",
      answer: "Please inform us as soon as possible. We cannot transfer your spot to someone else, but we can offer it to another candidate."
    },
    {
      id: "item-22",
      question: "Will I receive a participation certificate?",
      answer: "Yes, certificates are available on demand after the event for those who actively participate."
    },
    {
      id: "item-23",
      question: "How do I contact mentors or the ETHAccra team?",
      answer: "Mentors are available during the event for guidance.\n\nFor questions, email info@ethaccra.xyz.\n\nJoin our community chats on:\n• Telegram: https://t.me/c/1785270528/1\n• WhatsApp: https://chat.whatsapp.com/ILyl3Jlkwjm7HhyOXJNCMm"
    },
    {
      id: "item-24",
      question: "I want to sponsor or exhibit at ETHAccra. What do I do?",
      answer: "Contact us at info@ethaccra.xyz for the sponsorship prospectus and application instructions."
    },
    {
      id: "item-25",
      question: "How is intellectual property (IP) handled?",
      answer: "Participants retain full ownership of their projects. ETHAccra promotes open innovation, but it's entirely up to you how you manage your IP after the event."
    },
    {
      id: "item-26",
      question: "What should I bring to the event?",
      answer: "Bring your laptop, charger, and any other necessary items to work comfortably, such as a mouse, headphones, or an extension cord. Wi-Fi and power will be provided at the venue."
    },
    {
      id: "item-27",
      question: "Is there a code of conduct?",
      answer: "Yes. ETHAccra enforces a strict code of conduct to ensure a welcoming and respectful environment for everyone. Harassment, discrimination, or disruptive behavior of any kind will not be tolerated."
    },
    {
      id: "item-28",
      question: "What happens if my project is incomplete at the end of the hackathon?",
      answer: "That's okay! You don't need a fully finished product. As long as you can demo your progress and explain your idea, you're good. Judges value creativity, effort, and potential just as much as technical polish."
    },
    {
      id: "item-29",
      question: "How will the judging process work?",
      answer: "A panel of industry experts will evaluate projects based on innovation, technical difficulty, usability, impact, and presentation. Full judging criteria will be shared before demo day."
    },
    {
      id: "item-30",
      question: "Will there be swag or giveaways?",
      answer: "Absolutely! Thanks to our amazing sponsors, expect cool swag like T-shirts, stickers, and other fun goodies throughout the event."
    },
    {
      id: "item-31",
      question: "I have a question not listed here. Who can I ask?",
      answer: "Reach out to the ETHAccra team via email or join our Telegram and WhatsApp groups for direct support."
    }
  ];

  return (
    <div className="bg-pink-100 p-8 md:p-12 lg:p-16">
      {/* FAQ Heading */}
      <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-pink-400 mb-8 md:mb-12 lg:mb-16 ml-4">
        FAQs
      </h1>

      {/* FAQ Items */}
      <div className="space-y-0">
        {faqItems.map((item) => (
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
                <p className="text-black whitespace-pre-line">
                  {item.answer.split("\n\n").map((paragraph, i) => (
                    <React.Fragment key={i}>
                      {paragraph}
                      {i < item.answer.split("\n\n").length - 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </React.Fragment>
                  ))}
                </p>
                {item.id === "item-31" && (
                  <p className="mt-2">
                    You can reach out to the ETHAccra team on
                    {" "}
                    <a className="text-orange-500 underline" href="https://t.me/c/1785270528/1" target="_blank" rel="noopener noreferrer">Telegram</a>,
                    {" "}
                    <a className="text-orange-500 underline" href="https://chat.whatsapp.com/ILyl3Jlkwjm7HhyOXJNCMm" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    {" "}
                    or
                    {" "}
                    <a className="text-orange-500 underline" href="mailto:info@ethaccra.xyz">Email</a>.
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div id="contact-us"></div>
    </div>
    
  );
};

export default FaqSection;