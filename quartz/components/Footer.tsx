import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}
interface SocialLink {
  name: string;
  url: string;
  icon: string;
} 

const socialLinks: SocialLink[] = [
  {
    name: 'Telegram',
    url: 'https://t.me/backend_garden',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAAAXNSR0IArs4c6QAABM5JREFUaEPNmmnIrVMUx3/XLDOlezMlsw9kSAjl+oAQCkkhwwfcLkJkuEIypZR5JkIZrnnKmDFEKDMZkiFDmTLFtX/sfXre533O8+z9vOe816rTvfectdf672mt/1r7zmD0MhNYDVgWWBz4OX4+BH4blbsZUzTk+K2BnYHZwCbACkNs/g18CrwAPAXcB3zT139f4CsCRwGHAuv0dP5nmPQjwCXAY6U2SoEvDZwIHAcsX+qsRf/lcJxOAJ7NtVkCfMdwdq+Zwgp3YVoA3AgcGxbmxy7lHODqnA7MAxbtMjiC3z8A9gNeb7PVBXwx4Kp4lkeAKdvEL8A+8Q40DmoDLug7gT2z3Y1W8Y+w6nsBDzeZbQN+fQhfh4wWS7E1V34n4KX6yGHA5wIXF7sZz4CvgM0A/xxIE/BN4wyXHA+OXlYfAnZrA74I8BywTS/z4x1kpLkjuaiv+MExlo4XQj/rnwPrAr87vArcGP02sH4/u9MySppxRR24oefuaXH/nxO5yoNxh78H7m8haAnWR8B6wILqigta8OOW94AbIuCvK87kKdtlON9BTpOAS5ikmEtkDOyjIie/Hbgu0tomG5+F39fIMH55wDonATfUPJAxqFTlecBEJmjBJ1kb+MQtj1/MAr7INO6ObZiAnx/paubYVjW3/6YI+N2apkXGuXES0uMk0op7CpzPSsBd7QkBvsCIqlY3TwJXRwBevLrsAVwaz/cZtR/PCWHu5AKfsxNwl79PGJSCehRc4WFbvSZwWSzvDgt8/uYGgI9HTpKL/cgE/LvATVbOHGXBa+hydZ+onNP6cLPw4aFovhDw7/sOYXpiMBxaDubKaQm42agroniZzgNuy6hQNo8T2yJGq90By7Mm2SgmvlzQ6l1QAnxL4NUO68uE1T0rrODRgHz+Y2AX4P2WcX1oxgB4zlFJ0eLecF5fjBeyisfL7VleK375RmCZuwJfdkzWMabyEpnX93I6CfsiTuItwHAqe0vydMzCP2SgeSXkEHezRAaXc6rhsOrUeHwA8GsGkqUAJ9d1v+qmBuHQS3dShqMuFRfAZGJczxG7YB67Upk56pRvYjmzAIU9lIsK9FV9J1CIjRPw5YBve2xZ3ecxhbXqLfFYlWA3+86t0tr5wN4lFhp0D6pkxlOAVeMR/LdqaRAzr1VNiWxveVkFXkp0mpyZaCwOzg6FwqlR4TVgf0CQVVklJqeuplR1jK1qqcmEQsK0bOm2Qcn0a7oWAnagPLtV+Sm0F44ITm+tfGliamz2tPjXhp21CTWn/z4wEqa+2OUcbZxHQmZWtdEjhzm+wJGFhqs9qVhOE7E9sW2BwVJVOc8z8fiUxG938q7krOl8+aogIfo/NYTMD/L5gQy7GHMi6S9dzXHo20+xBWe47gSuwrWAxH9hinfBt6VJlLirzWzLazpaFk2LY5vZEO070STpiqFy6isXwsrbEfAyPjpsu7uAp0hjMpGHTMdTivWvFPnNtjOaAzyNt4PkubcFNg6RUdow8kWv2oNp9FUCXAOGSJ/1/JQUt10T9dFWm9kUtxR4AmDLLj3Q9t0BL58p35cPezJF0hd41clWsSD2HdTXjJWGIPgrtt1cXYHa4rDW7SWjAF53LJVdPf4nBFO6BMuPLeJh9LYY/D+iXt25KcxYDgAAAABJRU5ErkJggg==',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/valentyn-kit-735880228/',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAp5JREFUaEPtmjtoVEEUhr8NQiRCjA9UIooiFpJGtNHSQkTUQsQiKCKIDyxMYRJsxSLxUagIWggWigiChaAgFlZBC9FCQRC18IEg4oMIIaLG+WEWrsPMbvZmuTMb72l2mTvc+f9zzpwz58yt0OJSaXH8TGsCcxKyzi9g1IfHtUAHcArYBXQlREBQ3gMngQtZXC6Bi8ChxIC7cHqBG9XBLAH9/wrMTpzAHWCrj8As4Efi4AXvCbC2JBDRUv+nBSaAy4Ci1BtguY1WB6DwZJjLAqeBQY/bnDEJ5mjB7pSLQDfw0QN0sU0wRXJomMBvYCagdO7KDGAM0G9R0jABAVsPPPIgXAc8LAq5XScXgccG6CbgSwbsfEPsHrCmFQgI4yfgpo1CK4GdwLyCwZeZuFkK/wy8AhQgFgErGnhxrj0wADzwLLIZOJEZ3w6888w7YlxvDzBiEt9x4L4zR2F6nzlM9gOddcjkIrADuOV58W6jvauZce0NadYVFSIqkA5brYcwrgLuAstqkIhCQBFMWv8zCVdZbUN2e2BuFAKTwP3PlLOmuOpLkYAyeo89AD6t4U5yxZepEdgAXAO0YSUvzKbeCHwIAH0LLPE8i+JCC61G3QijI/r+AIHbwLZUCMif5deufK/RvrkC7E2FwBBwLKBphVcRceWcOXspf7gSxYWUB3wFkcAtDSS/UCQqCWRN2kgmLi1gNVe6UOlCTlwso1BVIbW6082oB8ooNJUo9Br45knrc22ftProOTDumacOnmpfnzwDfnoe6CS6oFlHicDaUYZz5YEoSAOLTl8CbfaSr15bI7Y11LXYUgXhXrNeMm30g7ER1llfd9jXQwSUC3SZoUmpWUL3E8PA+SzB0LcScqeU7ovVT/JVbYXfbzXdO/8Cl2HoMfn4QvMAAAAASUVORK5CYII=',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/valentynkt',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABTNJREFUaEPtmQWoLVUUhr9nF4pd2N2JYgeKqIiFja1gg9jdiYo+FVFEFLsxHk8MLBQDbFHsLhRRFDv299xzmTvO3jNn7jlHHrjgwuXM3muvf681a61/zTgmcxk3mdvP/wD+aw/22wNzASsCSwFzAzNGgD8CXwBvAa8AX/ULeD8ALA/sAWwBLAuNYfkX8DowAbg+/t8Zz1gAbA4cD6zb+fR/Nj4BnAU82EVPFwBLAJcCm3U5MLPnUeBg4I1e9PYKwFC5Apihl0N6WPszcCxwSds9bQFMBVwJ7NNW8RjXXRVe9IOAP5r0tAEwNXA7sHWTsj4/vxPYGfg9p7cJgM+vAfbqs3Ft1d0QM5yZq1aaAJwAnNn2tAGtOxK4sAuAdYDHAgDjvywWITPRgsC28b1YuKPx70cP3w18HG77vZDhZq/o+i2m6ufqzkh5wLh/AbBIVeXmUFF3Lf04HXA4cBwwE/B2LE5fA9/GdbMCc0R9iwM/xNx/cdj3S0nXbWHvDjVnvgSsXvdSpwAcCoxP3KphdXbNMw30tr5r8MYswXgvSIBVOSX8cGpi/wExE456XAdgGuAdYIGEoiOAizqGTNO2Y4BzE4s+AJaMlzSypA6A4XFj5iSNF8QgxAp/SEbxjjGlZwE80NAmTIyN2yAA2A9tmlF8P7BV+XnVAzMD39RknmLPT8AawGuDsB5YCXgWmDah/9fwbs4G2J5PkiqALcPbLsqUmI/Ny4MUk4dJJCU2kSOdaxXAacDJmc2LxVw9SACSoTczB5xULq5VALeEdnanxGaLjACGIR9lsqDtxe6pEHoquGfthIVW5Y2GYT3wZIYoPR46hA1TAF6OnLbOzkFmn+p5DwGbJC7rRWDVFAC5qry2Tp6PGWgYTtDIlRMHvVq+5Oo7ID9dL7HRxmvRYVgPfALMnzhL6rlxygN3xQ6zbu+foReZt58jkYSB8wCfZaYbNnwjiabqAfmuTVNKdgv9yE0D9sKewLWZM2w3Dkt5YO/Yn6f2j3LfgIDkMpBHmkJNpZOk6gFj/N0Gw+TG9w7I+O0DZ7ijQbdESvJTC8Afc0XE55KUDQCzQT9llaBXD8sXUvKvYlrXTp8TZzM54yQjB7a4rbYAdwmM7bLYqOX2nFFtdeoALBTDaMqoSXJjg7VCnBCUO0Wr4uWARU6a2IvY+do8Oo2TfzeJbG8R4NPywhSlLKdTOavZx+Jio3VdMHrOymkql0P7Jz8u89zyUsGbRVaLrXNxSU3G+/zWOCcatTYFYOlQD2wrpJeKcxmZ0sNB0TLBGw6d6g4/KhD7CxqsORo4r43FpTWOHB3bOzBoBcBFxtuJpdVOyFQyH+ALd34lizkGlGx832Cc5P9LYIoeQEj2T69bnxtsOS4xJLzxQooquF+slvvHcNIgU6vh1UY+jHOlNmtlf45UasOyaTJnXXimFPO2E7ayFhs7Ql27Zojp+4D1g4d8d9qIcx7pY5N4MWsB9mG10gTATfKDR8K4Q48ohoiTYwdcAuoiuW6z0Cf/ln/IkZPSBoCbVeSL64StkM+Bp+MQwOIj0d63JZomDzhY2C5+vcmqbAtAJY4E/a7lcKlOfF9Mj23ED33WlTqx2lofcrx4ZF8vANykB8w+3nR1r2k3RUKqhtqGVOeuhuPVsQsoZqqNl9ErgEKhldPSXzZ4FFNqONnMslxpjd5zlGJI9iRdARSH+G7YCtihFl9U2hjgF59tQj25J16EA4NOMlYAxaF+0DZrtM1KFrHpyxO2Tta3+CjdVe/Q9vXLA0MzuHrQ36wo4DH0dl6PAAAAAElFTkSuQmCC',
  },
  // Add more social links as needed
];

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
    <footer class={`${displayClass ?? ""}`}>
      <hr />
      <div className="social-links">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          <img src={link.icon} alt={link.name} className="social-icon" />
        </a>
      ))}
    </div>
      <hr />
        <div class="giscus"></div>
      <ul>
        <li>
          Copyright © Valentyn Kit
        </li>
        <li>
          Created using <a href="https://obsidian.md/">Obsidian</a> and{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz</a>
        </li>
      </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
