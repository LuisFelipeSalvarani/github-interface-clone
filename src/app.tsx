import { Footer } from './components/Footer/footer'
import { Header } from './components/Header/header'
import { Profile } from './components/Profile/profile'
import { Readme } from './components/Readme/readme'

export function App() {
  return (
    <>
      <Header />

      <main>
        <div className="mx-auto flex h-full flex-col gap-4 p-8 md:max-w-screen-xl md:flex-row">
          <Profile />

          <div>
            <Readme />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
