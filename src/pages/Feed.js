import React, { Component } from 'react'

import './Feed.css'

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.png'

export default class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Cezar Augusto Crummenauer</span>
              <span className="place">UFSM Santa Maria</span>
            </div>
            <img src={more} alt="Mais sobre a postagem" height="20" />
          </header>
          <img src="http://localhost:3333/files/programing.jpg" alt="Imagem da postagem" />
          <footer>
            <div className="actions">
              <img src={like} alt="Curtir esta postagem" height="22" />
              <img src={comment} alt="Comentar esta postagem" height="22" />
              <img src={send} alt="Enviar esta postagem" height="22" />
            </div>
            <strong>101 curtidas</strong>
            <p>
              Estudando nas férias...
              <span>#ufsm #react #programing</span>
            </p>
          </footer>
        </article>

        <article>
          <header>
            <div className="user-info">
              <span>Cezar Augusto Crummenauer</span>
              <span className="place">UFSM Santa Maria</span>
            </div>
            <img src={more} alt="Mais sobre a postagem" height="20" />
          </header>
          <img src="http://localhost:3333/files/home.jpg" alt="Imagem da postagem" />
          <footer>
            <div className="actions">
              <img src={like} alt="Curtir esta postagem" height="22" />
              <img src={comment} alt="Comentar esta postagem" height="22" />
              <img src={send} alt="Enviar esta postagem" height="22" />
            </div>
            <strong>102 curtidas</strong>
            <p>
              Estudando nas férias...
              <span>#ufsm #react #programing</span>
            </p>
          </footer>
        </article>
      </section>
    )
  }
}