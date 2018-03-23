import { Component, OnInit } from '@angular/core';
import { ListVideogameService } from '../../services/list-videogame.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VideoGame } from '../../class/VideoGame';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  value: string;
  game: VideoGame;
  admin: boolean;

  constructor(private gameList: ListVideogameService, private route: ActivatedRoute, private router : Router) {

    this.route.params.subscribe(params => {
      if (params['id'] != null && params['id']) {
        this.game = this.gameList.getGameById(params['id']);
      }
    })

  }

  ngOnInit() {
    if(sessionStorage.getItem("username") == "admin"){
      this.admin = true
    }
  }

  goToEdit(game: VideoGame) {
    this.router.navigate(['/app-edit/' + game.$id]); //setta l'id quando si va nella pagina detail
  }
}
