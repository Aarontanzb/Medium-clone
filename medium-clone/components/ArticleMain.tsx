import Image from 'next/image'
import Qazi from '../static/qazi.jpg'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoLogoTwitter } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import { HiOutlineLink } from 'react-icons/hi'
import { BiBookmarks } from 'react-icons/bi'
import { FiMoreHorizontal } from 'react-icons/fi'
import Banner from './../static/banner.png'

const styles = {
  wrapper: 'flex items-center justify-center flex-[3] border-r h-full',
  content: 'h-screen p-[2rem] pl-[24rem] pr-[6.5rem]',
  postHeaderContainer:
    'flex justify-between items-center mt-[2.2rem] mb-[1.2rem]',
  authorContainer: 'flex gap-[1rem]',
  authorProfileImageContainer:
    'h-[3rem] w-[3rem] grid center rounded-full overflow-hidden',
  column: 'flex-1 flex flex-col justify-center',
  postDetails: 'flex gap-[.2rem] text-[#787878]',
  listenButton: 'flex items-center gap-[.2rem] text-[#1A8917]',
  socials: 'flex gap-[1rem] text-[#787878] cursor-pointer',
  space: 'w-[.5rem]',
  bannerContainer: 'h-[18rem] w-full grid center overflow-hidden mb-[2rem]',
  articleMainContainer: 'flex flex-col gap-[1rem]',
  image: 'w-full h-full object-cover',
  title: 'font-bold text-3xl',
  subtitle: 'font-mediumSerifItalic text-[1.4rem] text-[#787878]',
  articleText: 'font-mediumSerif text-[1.3rem] text-[#292929]',
}

const ArticleMain = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <Image
                className={'object-cover'}
                src={Qazi}
                width={100}
                height={100}
                alt="articleImage"
              />
            </div>
            <div className={styles.column}>
              <div>Aaron Tan</div>
              <div className={styles.postDetails}>
                <span>April 6 · 5 min read · </span>
                <span className={styles.listenButton}>
                  <AiFillPlayCircle /> Listen
                </span>
              </div>
            </div>
          </div>
          <div className={styles.socials}>
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className={styles.space} />
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>
        <div className={styles.articleMainContainer}>
          <h1 className={styles.title}>The Ultimate guide to Hypotenuse AI</h1>
          <h4 className={styles.subtitle}>Brief: How to use if effectively</h4>
          <div className={styles.bannerContainer}>
            <Image
              className={styles.image}
              src={Banner}
              height={100}
              width={100}
              alt="banner"
            />
          </div>
          <div className={styles.articleText}>
            I’ve observed thousands of founders and thought a lot about what it
            takes to make a huge amount of money or to create something
            important. Usually, people start off wanting the former and end up
            wanting the latter. Here are 13 thoughts about how to achieve such
            outlier success. Everything here is easier to do once you’ve already
            reached a baseline degree of success (through privilege or effort)
            and want to put in the work to turn that into outlier success. [1]
            But much of it applies to anyone. 1. Compound yourself Compounding
            is magic. Look for it everywhere. Exponential curves are the key to
            wealth generation. A medium-sized business that grows 50% in value
            every year becomes huge in a very short amount of time. Few
            businesses in the world have true network effects and extreme
            scalability. But with technology, more and more will. It’s worth a
            lot of effort to find them and create them. You also want to be an
            exponential curve yourself—you should aim for your life to follow an
            ever-increasing up-and-to-the-right trajectory. It’s important to
            move towards a career that has a compounding effect—most careers
            progress fairly linearly. You don't want to be in a career where
            people who have been doing it for two years can be as effective as
            people who have been doing it for twenty—your rate of learning
            should always be high. As your career progresses, each unit of work
            you do should generate more and more results. There are many ways to
            get this leverage, such as capital, technology, brand, network
            effects, and managing people. It’s useful to focus on adding another
            zero to whatever you define as your success metric—money, status,
            impact on the world, or whatever. I am willing to take as much time
            as needed between projects to find my next thing. But I always want
            it to be a project that, if successful, will make the rest of my
            career look like a footnote. Most people get bogged down in linear
            opportunities. Be willing to let small opportunities go to focus on
            potential step changes. I think the biggest competitive advantage in
            business—either for a company or for an individual’s career—is
            long-term thinking with a broad view of how different systems in the
            world are going to come together. One of the notable aspects of
            compound growth is that the furthest out years are the most
            important. In a world where almost no one takes a truly long-term
            view, the market richly rewards those who do. Trust the exponential,
            be patient, and be pleasantly surprised. 2. Have almost too much
            self-belief Self-belief is immensely powerful. The most successful
            people I know believe in themselves almost to the point of delusion.
            Cultivate this early. As you get more data points that your judgment
            is good and you can consistently deliver results, trust yourself
            more. If you don’t believe in yourself, it’s hard to let yourself
            have contrarian ideas about the future. But this is where most value
            gets created. I remember when Elon Musk took me on a tour of the
            SpaceX factory many years ago. He talked in detail about
            manufacturing every part of the rocket, but the thing that sticks in
            memory was the look of absolute certainty on his face when he talked
            about sending large rockets to Mars. I left thinking “huh, so that’s
            the benchmark for what conviction looks like.” Managing your own
            morale—and your team’s morale—is one of the greatest challenges of
            most endeavors. It’s almost impossible without a lot of self-belief.
            And unfortunately, the more ambitious you are, the more the world
            will try to tear you down. Most highly successful people have been
            really right about the future at least once at a time when people
            thought they were wrong. If not, they would have faced much more
            competition. Self-belief must be balanced with self-awareness. I
            used to hate criticism of any sort and actively avoided it. Now I
            try to always listen to it with the assumption that it’s true, and
            then decide if I want to act on it or not. Truth-seeking is hard and
            often painful, but it is what separates self-belief from
            self-delusion. This balance also helps you avoid coming across as
            entitled and out of touch. 3. Learn to think independently
            Entrepreneurship is very difficult to teach because original
            thinking is very difficult to teach. School is not set up to teach
            this—in fact, it generally rewards the opposite. So you have to
            cultivate it on your own. Thinking from first principles and trying
            to generate new ideas is fun, and finding people to exchange them
            with is a great way to get better at this. The next step is to find
            easy, fast ways to test these ideas in the real world. “I will fail
            many times, and I will be really right once” is the entrepreneurs’
            way. You have to give yourself a lot of chances to get lucky. One of
            the most powerful lessons to learn is that you can figure out what
            to do in situations that seem to have no solution. The more times
            you do this, the more you will believe it. Grit comes from learning
            you can get back up after you get knocked down.
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleMain
