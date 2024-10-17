import { BadgesCode } from './badges-code'
import { BadgesContact } from './badges-contact'
import { HeaderReadme } from './header-readme'
import { Statistic } from './statistic'

export function Readme() {
  return (
    <section className="flex flex-1 flex-col gap-6 rounded-md border border-git-light/30 p-6">
      <HeaderReadme />

      <h2 className="flex items-end border-git-light/20 border-b py-2 font-semibold text-git-light text-xl">
        Luis Felipe Salvarani
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDk4YjZmM2ZmMDgxOTIwYzIxM2Q3N2IzOGRkMDNkNzZkNWE0MDFlOCZjdD1z/KVavw5OVSK7LmYyhVx/giphy.gif"
          width={50}
          alt=""
        />
      </h2>

      <p className="flex flex-wrap gap-1 text-git-light text-sm italic">
        Software Development Student at{' '}
        <span className="cursor-pointer text-blue-500 underline">
          Fatec Itapira
        </span>
        <img
          src="https://media4.giphy.com/media/124rIiBX0Kh5Cw/giphy.gif?cid=ecf05e474jels10c7dpbypvunrf5rrl1bwhv205fdhb0ngo2&rid=giphy.gif&ct=s"
          width={30}
          alt=""
        />
      </p>

      <p className="text-git-light text-sm italic">
        Frontend Developer in Conttrotech
      </p>

      <Statistic />

      <BadgesCode />

      <div className="flex justify-between">
        <BadgesContact />

        <img
          className="2xs:flex hidden h-36"
          alt=""
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzFiYWEyOTE3YjU5YjM3Y2RhYjUxNTljNjMwZDg1NGVlYjRhNjhiYSZjdD1z/bcKwTeSFswIlVJebN8/giphy.gif"
        />
      </div>
    </section>
  )
}
