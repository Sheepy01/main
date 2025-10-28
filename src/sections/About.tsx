import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CSSIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import TechIcon from "@/components/TechIcon";
import mapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";

const toolBoxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon
  },
  {
    title: 'CSS3',
    iconType: CSSIcon
  },
  {
    title: 'React',
    iconType: ReactIcon
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon
  },
  {
    title: 'GitHub',
    iconType: GithubIcon
  },
]

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: '5%',
    top: '5%'
  },
  {
    title: 'Photography',
    emoji: '📸',
    left: '20%',
    top: '20%'
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '55%',
    top: '45%'
  },
  {
    title: 'Hiking',
    emoji: '🚶',
    left: '45%',
    top: '70%'
  },
  {
    title: 'Hiking',
    emoji: '🚶',
    left: '20%',
    top: '60%'
  },
  {
    title: 'Music',
    emoji: '🎧',
    left: '7%',
    top: '40%'
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♂️',
    left: '60%',
    top: '5%'
  },
  {
    title: 'Reading',
    emoji: '📖',
    left: '30%',
    top: '0%'
  },
]

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="A Glimpse into our World" description="Learn more about who we are, what we do, and what inspires us"></SectionHeader>
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="Our Reads" description="Explore the books shaping our perspective"></CardHeader>
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book"></Image>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader className="" title="Our Toolbox" description="Explore the technologies and tools we use to craft exceptional digital experiences"></CardHeader>
              <ToolBoxItems toolBoxItems={toolBoxItems} className=""></ToolBoxItems>
              <ToolBoxItems toolBoxItems={toolBoxItems} className="mt-6" itemsWrapperClassName="-translate-x-1/2"></ToolBoxItems>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="Beyond the Code" description="Explore our interests beyond the digital realm" className="px-6 py-6"></CardHeader>
              <div className="relative flex-1">
                {
                  hobbies.map((hobby) => (
                    <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-[#10b96a] to-sky-400 rounded-full py-1.5 absolute" style={{
                      left: hobby.left,
                      top: hobby.top
                    }}>
                      <span className="font-medium text-gray-950">{hobby.title}</span>
                      <span>{hobby.emoji}</span>
                    </div>
                  ))
                }
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                <Image src={mapImage} alt="Map Image" className="h-full w-full object-cover"></Image>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-[#10b96a] to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <Image src={smileMemoji} alt="Smiling Emoji" className="size-20"></Image>
                </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
