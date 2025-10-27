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
    emoji: '🎨'
  },
  {
    title: 'Photography',
    emoji: '📸'
  },
  {
    title: 'Gaming',
    emoji: '🎮'
  },
  {
    title: 'Hiking',
    emoji: '🚶'
  },
  {
    title: 'Hiking',
    emoji: '🚶'
  },
  {
    title: 'Music',
    emoji: '🎧'
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♂️'
  },
  {
    title: 'Reading',
    emoji: '📖'
  },
]

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="A Glimpse into our World" description="Learn more about who we are, what we do, and what inspires us"></SectionHeader>
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader title="Our Reads" description="Explore the books shaping our perspective"></CardHeader>
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="book"></Image>
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader className="px-6 pt-6" title="Our Toolbox" description="Explore the technologies and tools we use to craft exceptional digital experiences"></CardHeader>
            <ToolBoxItems toolBoxItems={toolBoxItems} className="mt-6"></ToolBoxItems>
            <ToolBoxItems toolBoxItems={toolBoxItems} className="mt-6" itemsWrapperClassName="-translate-x-1/2"></ToolBoxItems>
          </Card>
          <Card>
            <CardHeader title="Beyond the Code" description="Explore our interests beyond the digital realm"></CardHeader>
            <div>
              {
                hobbies.map((hobby) => (
                  <div key={hobby.title}>
                    <span>{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))
              }
            </div>
          </Card>
          <Card>
              <Image src={mapImage} alt="Map Image"></Image>
              <Image src={smileMemoji} alt="Smiling Emoji"></Image>
          </Card>
        </div>
      </div>
    </div>
  );
};
