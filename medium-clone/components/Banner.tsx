import Image from 'next/image'
import Logo from './../static/banner.png'

const styles = {
  accentedButton: 'bg-black text-white rounded-full py-2 px-12 text-xl',
  content: 'flex-1 flex items-center justify-between',
  wrapper:
    'h-max-[10rem] flex items-center justify-center bg-[#FCC017] border-y border-black py-11 px-10',
}

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className="space-y-4 ml-40 pl-40 flex-[3] mb-5">
          <h1 className="max-w-xl text-[6.3rem] font-mediumSerif">
            Stay curious.
          </h1>
          <h3 className="text-2xl pb-4">
            Discover stories, thinking, and expertise <br /> from writers on any
            topic.
          </h3>
          <button className={styles.accentedButton}>Start Reading</button>
        </div>

        <Image
          className="object-contain"
          src={Logo.src}
          width={500}
          height={400}
          alt="banner img"
        />
      </div>
    </div>
  )
}

export default Banner
