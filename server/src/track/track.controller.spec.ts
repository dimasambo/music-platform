import {Test, TestingModule} from '@nestjs/testing';
import * as request from 'supertest';
import {app} from '../main';
import {AppModule} from '../app.module';
import {HttpStatus} from '@nestjs/common';
import {TrackController} from "./track.controller";
import {TrackModule} from "./track.module";

describe('ProductsController', () => {
    let controller: TrackController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [TrackModule, AppModule],
        }).compile();

        controller = module.get<TrackController>(TrackController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });


    let createdTrack = null;
    it(`should create track`, async () => {
        const res = await request(app.getHttpServer())
            .post('/Tracks')
            .send({ name: 'Name1', artist: 'Artist1', text: 'Text1' })
            /*.attach('audio', './test-files/audio.mp3')
            .attach('picture', './test-files/picture.png')*/
            .expect(HttpStatus.CREATED);

        createdTrack = res.body;
    });


    it(`should return all tracks`, async () => {
        const res = await request(app.getHttpServer())
            .get('/Tracks')
            .expect(HttpStatus.OK)

        const allTracks = res.body
        console.log(allTracks)
    });


    it(`should create comment and add it to the track`, async () => {
        const res = await request(app.getHttpServer())
            .post(`/tracks/comment`)
            .send({
                username: 'Dima',
                text: 'Comment',
                trackId: createdTrack._id
            })
            .expect(HttpStatus.CREATED)
    });


    it(`should return one track by requested id`, async () => {
        const res = await request(app.getHttpServer())
            .get(`/tracks/${createdTrack._id}`)
            .expect(HttpStatus.OK)

        const requestedTrack = res.body
        console.log(requestedTrack)
    });


    it(`should delete track by id`, async () => {
        const res = await request(app.getHttpServer())
            .delete(`/tracks/${createdTrack._id}`)
            .expect(HttpStatus.OK)
    });


    it(`should return all tracks, without latest created`, async () => {
        const res = await request(app.getHttpServer())
            .get('/Tracks')
            .expect(HttpStatus.OK)

        const allTracks = res.body
        console.log(allTracks)
    });
});
