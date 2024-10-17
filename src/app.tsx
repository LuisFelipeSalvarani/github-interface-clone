import { Footer } from './components/Footer/footer'
import { Header } from './components/Header/header'
import { Profile } from './components/Profile/profile'

export function App() {
  return (
    <>
      <Header />

      <main>
        <div className="mx-auto flex h-full flex-col p-8 md:max-w-screen-xl md:flex-row">
          <Profile />

          <div className="h-screen" />
        </div>
      </main>

      <Footer />
    </>
  )
}
