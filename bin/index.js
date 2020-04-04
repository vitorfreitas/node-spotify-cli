#!/usr/bin/env node

const nodeSpotify = require('node-spotify-bus')
const { program } = require('commander')
program.version('1.0.2')

program
  .command('song')
  .description('get the current playing song name')
  .action(async () => {
    const song = await nodeSpotify.getSong()
    console.log(song)
    process.exit(0)
  })

program
  .command('artist')
  .description('get the current playing artist')
  .action(async () => {
    const song = await nodeSpotify.getArtist()
    console.log(song)
    process.exit(0)
  })

program
  .command('album')
  .description('get the current playing album')
  .action(async () => {
    const song = await nodeSpotify.getAlbum()
    console.log(song)
    process.exit(0)
  })

program.parse(process.argv)
