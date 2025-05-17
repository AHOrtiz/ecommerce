import { Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { BannerUseCase } from "../../core/use-cases/banner.use-case";
import { BannerRepository } from "../../core/repositories/banner.repository";
import { Banner } from "../../core/models/banner.model";

@Injectable({providedIn: 'root'})

export class BannerUseCaseImpl extends BannerUseCase{
  constructor(private bannerRepository:BannerRepository){super();}


    override create(body: Banner): Observable<Banner> {
       return this.bannerRepository.create(body);
    }
    override findAll(): Observable<Banner[]> {
       return this.bannerRepository.findAll();
    }
}
