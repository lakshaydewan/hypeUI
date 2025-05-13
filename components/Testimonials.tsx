'use client'
import React, { useRef } from 'react'
import { motion } from 'motion/react'
import { useScroll, useTransform } from 'motion/react'
import { IconBrandTwitter } from '@tabler/icons-react'
import Image from 'next/image'

const testimonialsWork: TestimonialsCoreProps[] = [
  {
    name: "Sophia Ramirez",
    username: "soph_r_dev",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "Working with this tool saved our team *so much* time 🕒. The onboarding was smooth and support was 🔥. Highly recommend it to any dev team!"
  },
  {
    name: "Liam Chen",
    username: "liam.codes",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "I was skeptical at first 🤔, but after integrating it into our workflow, I can't imagine going back. It’s fast, reliable, and just works ✅."
  },
  {
    name: "Isabelle Fournier",
    username: "isabelleUX",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "As a designer, I appreciated how intuitive the interface is 🎨. It feels like someone *actually* thought about UX for once! 👏"
  },
  {
    name: "David Okoro",
    username: "d.okoro_pm",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "We rolled this out across two departments last quarter and productivity jumped by 27% 📈. Super valuable tool for any fast-paced team!"
  },
  {
    name: "Julia Novak",
    username: "julianovak.dev",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "This platform nails the balance between simplicity and power ⚡️. I’ve onboarded three junior devs using it and they picked it up instantly 🙌"
  }
];

const testimonialsCommunity: TestimonialsCoreProps[] = [
  {
    name: "Jaden Thomas",
    username: "jadenthinks",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "Shoutout to the devs of this platform 💯. Been using it for weeks and it's now part of my daily grind 💻☕️ #ProductivityBoost"
  },
  {
    name: "Maya Singh",
    username: "maya.codes",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    text: "Seriously, where was this all my life? 😭 It just gets what creators need. Even my friends are onboard now 🚀 Every time I open it, I find something new that makes life easier 🙌. Literally obsessed 💫."
  },
  {
    name: "Carlos Nguyen",
    username: "cnguyencode",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    text: "Tried it out on a whim and ended up falling in love 🫶. Super responsive and clean UI. 10/10 would use again ⭐️"
  },
  {
    name: "Alina Brooks",
    username: "alinab_daily",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    text: "Every time I open it, I find something new that makes life easier 🙌. Literally obsessed 💫."
  },
  {
    name: "Tariq Evans",
    username: "tariqXev",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    text: "This became my go-to tool after just a week 🔁. It’s like they knew exactly what we needed 🤯."
  }
];

const testimonialsStudents: TestimonialsCoreProps[] = [
  {
    name: "Emily Zhao",
    username: "emilyZlearns",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    text: "Perfect for students! 🎓\n\nHelped me build my first project and feel *actually* confident presenting it 🙌.\n\nIt was the first time I felt proud showing my code to others — such a confidence boost."
  },
  {
    name: "Noah Patel",
    username: "noah.dev.student",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    text: "I used this for my capstone project and wow — my prof was impressed 😎📚.\n\nGetting started was a breeze even with basic skills.\n\nThe docs are 🔥 and the community answered every dumb question I had. Seriously next level 💡💻."
  },
  {
    name: "Arjun Desai",
    username: "arjunxlearning",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    text: "The learning curve was so smooth.\n\nI went from confused to confident in a weekend.\n\nFeels like I'm actually becoming a real dev every time I build something with this 💻💪. Used this to finish a last-minute assignment at 3AM 😂⏰.\n\nTotal lifesaver.\n\nIt just worked — no setup hell, no bugs, just clean output."
  },
  {
    name: "Fatima El-Sayed",
    username: "fatimacodes",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    text: "Built a full portfolio site in a weekend! 🤯\n\nDidn’t expect things to look this clean so fast.\n\nThis gave me the confidence to start applying for internships 🧳💼."
  },
  {
    name: "Jake Moretti",
    username: "jake.codes.late",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    text: "Used this to finish a last-minute assignment at 3AM 😂⏰.\n\nTotal lifesaver.\n\nIt just worked — no setup hell, no bugs, just clean output."
  }
];


const Testimonials = () => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end start', 'start end'],
    })
    const y = useTransform(scrollYProgress, [0, 1], [-50, 100])
    const yPosition = useTransform(scrollYProgress, [0, 1], [-100, 200])
    const yPositionForSecond = useTransform(scrollYProgress, [0, 1], [-200, 400])

    return (
        <div className='h-[70vh] md:h-[120vh] relative overflow-hidden pt-10 w-full dark:bg-neutral-950 bg-white flex flex-col items-center justify-center'>
            <div className='w-full py-14 pl-4 md:pl-8 h-fit md:pt-32 md:pb-0 text-left'>
                <h1 className='font-sans font-extrabold text-3xl md:text-7xl w-full'>Some words from our users</h1>
            </div>
            <motion.div
                ref={ref} className='p-4 md:p-8 pb-8 md:pb-16 w-full h-full flex flex-col md:flex-row md:gap-5 justify-center items-center gap-4'>
                <div className='w-full h-full'>
                    <motion.div
                        style={{ y: y }}
                        className='md:flex hidden  flex-col gap-8 justify-center items-center w-full h-full'>
                        {
                            testimonialsWork.map((item, index) => (
                                <TestimonialsCore
                                    key={index}
                                    name={item.name}
                                    username={item.username}
                                    image={item.image}
                                    text={item.text}
                                />
                            ))
                        }
                    </motion.div>
                </div>
                <div className='md:block hidden  overflow-hidden w-full h-full'>
                    <motion.div
                        style={{ y: yPosition }}
                        className='flex flex-row md:flex-col gap-8 justify-center items-center w-full h-full'>
                        {
                            testimonialsCommunity.map((item, index) => (
                                <TestimonialsCore
                                    key={index}
                                    name={item.name}
                                    username={item.username}
                                    image={item.image}
                                    text={item.text}
                                />
                            ))
                        }
                    </motion.div>
                </div>
                <div className='lg:block hidden overflow-hidden  w-full h-fit'>
                    <motion.div
                        style={{ y: yPositionForSecond }}
                        className='flex flex-row md:flex-col gap-8 justify-center items-center w-full h-full'>
                        {
                            testimonialsStudents.map((item, index) => (
                                <TestimonialsCore
                                    key={index}
                                    name={item.name}
                                    username={item.username}
                                    image={item.image}
                                    text={item.text}
                                />
                            ))
                        }
                    </motion.div>
                </div>
            </motion.div>
            {/* BOTTOM GRADIENT */}
            <div className='absolute bottom-0 w-full h-[100px] bg-gradient-to-t dark:from-neutral-950 dark:to-transparent from-white to-transparent'></div>
        </div>
    )
}

interface TestimonialsCoreProps {
    name: string;
    username: string;
    image: string;
    text: string;
}

export function TestimonialsCore(props: TestimonialsCoreProps) {
    
    const { name, username, image, text } = props;

    return (
        <div className='w-full h-fit bg-neutral-50 shadow dark:border dark:bg-[#18181b] dark:border-neutral-700 rounded-2xl'>
            <div className='flex flex-col gap-2 p-4'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row gap-3 items-center'>
                        <div className='size-10 rounded-full overflow-hidden'>
                            <Image height={400} width={400} src={image} alt='user_profile' />
                        </div>
                        <span className='flex flex-col'>
                            <h1 className='dark:text-white text-neutral-950 font-bold text-lg h-fit p-0'>{name}</h1>
                            <h3 className='dark:text-neutral-300 text-neutral-600 -mt-1 text-sm h-fit p-0'>{username}</h3>
                        </span>
                    </div>
                    <IconBrandTwitter className='size-4 fill-blue-600 text-blue-600' />
                </div>
                <p className='dark:text-neutral-400 text-neutral-600'>{text}</p>
            </div>
        </div>
    )
}

export default Testimonials;