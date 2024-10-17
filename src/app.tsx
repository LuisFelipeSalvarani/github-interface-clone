import { Footer } from './components/Footer/footer'
import { Header } from './components/Header/header'
import { Pinned } from './components/Pinned/pinned'
import { Profile } from './components/Profile/profile'
import { Readme } from './components/Readme/readme'

export function App() {
  return (
    <>
      <Header />

      <main>
        <div className="mx-auto flex h-full flex-col gap-4 p-8 md:max-w-screen-xl md:flex-row">
          <Profile />

          <div className="flex flex-col gap-6">
            <Readme />

            <Pinned />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
