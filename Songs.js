document.addEventListener('DOMContentLoaded', () => {
    // -------------------- Musikdaten --------------------
    const musicFolders = {
        'aether': {
            songPath: 'Musik/Aether/',
            imagePath: 'Musik/Aether Pic/',
            songs: ['aether_tune.ogg', 'ascending_dawn.ogg', 'chinchilla.ogg', 'sliders_wrath.ogg', 'da_a_morning_wish.ogg', 'da_nabooru.ogg', 'high.ogg', 'klepto.ogg']
        },
        'alexs-mobs': {
            songPath: 'Musik/Alexs Mobs/',
            imagePath: 'Musik/Alexs Mobs Pic/',
            songs: ['april_fools.ogg', 'daze.ogg', 'thime.ogg', 'wormboss.ogg']
        },
        'bigdans-music-discs': {
            songPath: 'Musik/BigDans Music Discs/',
            imagePath: 'Musik/BigDans Music Discs Pic/',
            songs: ['5-10k.ogg', 'alive.ogg', 'bad_omen.ogg', 'bastion.ogg', 'bluezing.ogg', 'brute.ogg', 'cascade.ogg', 'comet.ogg', 'desert-ed.ogg', 'forest.ogg', 'fort-stress.ogg', 'fort-stress_remix.ogg', 'gaurdian.ogg', 'gilded.ogg', 'glide.ogg', 'gold_pluck.ogg', 'husk.ogg', 'just_for_you.ogg', 'lightning.ogg', 'luminous.ogg', 'northen_lights.ogg', 'ochre.ogg', 'overtune.ogg', 'pumpkin.ogg', 'purple_matter.ogg', 'raiders.ogg', 'rain.ogg', 'ribbit.ogg', 'rock.ogg', 'sci-mine.ogg', 'shrieker.ogg', 'shrieker_x_brute.ogg', 'shulker.ogg', 'sleigh.ogg', 'snowstorm.ogg', 'soulless.ogg', 'stride.ogg', 'temple.ogg', 'the_ender_dragon.ogg', 'the_wither.ogg', 'thunderstorm.ogg', 'time.ogg', 'tundra.ogg', 'underscore.ogg', 'vines.ogg', 'warden-run.ogg', 'warm.ogg', 'what.ogg', 'whisper.ogg', 'woodland.ogg']
        },
        'biomsoplenty': {
            songPath: 'Musik/Biomsoplenty/',
            imagePath: 'Musik/Biomsoplenty Pic/',
            songs: ['blot.ogg', 'cortisol.ogg', 'mesh.ogg', 'redhead.ogg', 'timber.ogg', 'wanderer.ogg']
        },
        'cataclysm': {
            songPath: 'Musik/Cataclysm/',
            imagePath: 'Musik/Cataclysm Pic/',
            songs: ['ancient_remnant.ogg', 'ender_guardian.ogg', 'harbinger.ogg', 'ignis.ogg', 'leviathan.ogg', 'leviathan_1.ogg', 'leviathan_2.ogg', 'maledictus.ogg', 'netherite_monstrosity.ogg']
        },
        'create-connected': {
            songPath: 'Musik/Create connected/',
            imagePath: 'Musik/Create connected Pic/',
            songs: ['elevator.ogg', 'interlude.ogg']
        },
        'fnaf': {
            songPath: 'Musik/Fnaf/',
            imagePath: 'Musik/Fnaf Pic/',
            songs: ['aftershow.ogg', 'another_five_nights.ogg', 'baloons.ogg', 'balloralullaby.ogg', 'behind_the_mask.ogg', 'below_the_surface.ogg', 'break_my_mind.ogg', 'can_you_survive.ogg', 'count_the_ways.ogg', 'dance_to_forget.ogg', 'darkest_desire.ogg', 'darkest_desire2.ogg', 'die_in_a_fire.ogg', 'dream_your_dream.ogg', 'everybody.ogg', 'fetch.ogg', 'five_long_nights.ogg', 'five_more_nights.ogg', 'fnaf_big_band.ogg', 'fnaf1_german.ogg', 'fnaf1_song.ogg', 'fnaf3.ogg', 'follow_me.ogg', 'funtime_dancefloor.ogg', 'get_away.ogg', 'i_am_the_purple_guy.ogg', 'i_cant_fix_you.ogg', 'imitation.ogg', 'into_the_pit.ogg', 'its_been_so_long.ogg', 'its_me.ogg', 'its_time_to_die.ogg', 'jackies_box.ogg', 'join_us_for_a_bite.ogg', 'labyrinth.ogg','left_behind.ogg', 'lite_it_or_not.ogg', 'lonely_freddy.ogg', 'Make_your_move.ogg', 'never_be_alone.ogg', 'oogie_boogies.ogg', 'puppet_song.ogg', 'shadow_bonnie_lullaby.ogg', 'stay_calm.ogg', 'step_on_up.ogg', 'stuck_inside.ogg', 'survive_the_night.ogg', 'this_comes_from_inside.ogg', 'to_be_beautiful.ogg', 'we_are_the_phantoms.ogg', 'we_know_what_scares_you.ogg', 'you_cant_hide.ogg']
        },
        'minecraft': {
            songPath: 'Musik/Minecraft/',
            imagePath: 'Musik/Minecraft Pic/',
            songs: ['5.ogg', '11.ogg', '13.ogg', 'Blocks.ogg', 'Cat.ogg', 'Chirp.ogg', 'Creator.ogg', 'Creator_music_box.ogg', 'Far.ogg', 'Mall.ogg', 'Mellohi.ogg', 'Otherside.ogg', 'Pigstep.ogg', 'Relic.ogg', 'Stal.ogg', 'Strad.ogg', 'Tears.ogg', 'Wait.ogg', 'Ward.ogg', 'A Familiar Room.mp3', 'Aerie.mp3', 'Alpha.ogg', 'An Ordinary Day.mp3', 'Ancestry.mp3', 'Aria Math.ogg', 'Axolotl.mp3', 'Ballad of the Cats.ogg', 'Biome Fest.ogg', 'Blind Spots.ogg', 'Boss.ogg', 'Bromeliad.mp3', 'Chrysopoeia.mp3', 'Clark.ogg', 'Comforting Memories.mp3', 'Concrete Halls.ogg', 'Crescent Dunes.mp3', 'Danny.ogg', 'Dead Voxel.ogg', 'Deeper.mp3', 'Dragon Fish.mp3', 'Dreiton.ogg',
                    'Dry Hands.ogg', 'Echo in the Wind.mp3', 'Eld Unknown.mp3','Featherfall.mp3', 'Featherfall.ogg', 'Firebugs.mp3', 'Firebugs.ogg', 'Floating Dream.mp3', 'Haggstrom.ogg', 'Haunt Muskie.ogg', 'Infinite Amethyst.mp3', 'Key.ogg', 'Komorebi.mp3', 'Labyrinthine.mp3', 'Left To Bloom.mp3', 'Lena Raine.ogg', 'Living Mice.ogg', 'Mice on Venus.ogg', 'Minecraft.ogg', 'One More Day.mp3', 'Oxygène.ogg', 'Pokopoko.mp3', 'Puzzlebox.mp3', 'Rubedo.mp3', 'Shuniji.mp3', 'So Below.mp3', 'So Below.ogg', 'Stand Tall.mp3', 'Subwoofer Lullaby.ogg', 'Sweden.ogg', 'Taswell.ogg', 'The End.ogg', 'Warmth.ogg', 'Watcher.mp3', 'Wending.mp3', 'Wet Hands.ogg', 'Yakusoku.mp3']
        },
        'morediscs': {
            songPath: 'Musik/More discs/',
            imagePath: 'Musik/More discs Pic/',
            songs: ['42.ogg', 'activate.ogg', 'aether.ogg', 'aggressionegression.ogg', 'alternatedimension.ogg', 'amethyzied.ogg', 'anchores.ogg', 'ancientruins.ogg', 'ancienttheme.ogg', 'anti.ogg', 'anti_remake.ogg', 'avian.ogg', 'axcktale.ogg', 'azometrall.ogg', 'becomeadestructor.ogg', 'before.ogg', 'blazetrap.ogg', 'castle.ogg', 'chill.ogg', 'chop.ogg', 'chorus.ogg', 'clouds.ogg', 'corrupte.ogg', 'dear_diary.ogg', 'deeperhouses.ogg', 'desert.ogg', 'disc.ogg', 'dive.ogg', 'dreams.ogg', 'droopylovesjean.ogg', 'dropclouds.ogg', 'drowned_anthem.ogg', 'enderwalk.ogg', 'extrauoser.ogg', 'extrauosert.ogg', 'flight_of_the_voids_ship.ogg', 'flyingship.ogg', 'forest.ogg', 'galacticloose.ogg', 'glitshymonum.ogg', 'hue.ogg', 'into_the_jungle.ogg', 'jungle.ogg', 'jungler.ogg', 'just_the_beginning.ogg', 'krushearz.ogg', 'krushearzt.ogg', 'left_shift.ogg', 'lgm.ogg', 'mangrove_swamp.ogg', 'mesa_depth.ogg', 'mush_roam.ogg', 'nostalg.ogg', 'omen.ogg', 'passion.ogg', 'phonikpace.ogg', 'planettech.ogg', 'potion_of_swiftness.ogg',
                    'quithere.ogg', 'raid.ogg', 'rain.ogg', 'rainbows.ogg', 'range.ogg', 'ravage.ogg', 'reloaded.ogg', 'retri.ogg', 'sand.ogg', 'scopophobia.ogg', 'scorched.ogg', 'seeds.ogg', 'shallow.ogg', 'shroom.ogg', 'silence.ogg', 'sky.ogg', 'sleepz.ogg', 'soul.ogg', 'sound.ogg', 'spiral.ogg', 'squidly.ogg', 'squiggles.ogg', 'stowchip.ogg', 'stridehop.ogg', 'strikethemdown.ogg', 'submerge.ogg', 'tall.ogg', 'tearsofjoy.ogg', 'technobladeneverdiesatleastinourhearts.ogg', 'test.ogg', 'thebrightside.ogg', 'thedarkside.ogg', 'thelostsoul.ogg', 'thespeedrunner.ogg', 'thesyndicate.ogg', 'theunfinishedsymphony.ogg', 'tide.ogg', 'tragicdecision.ogg', 'turfufact.ogg', 'ucrism.ogg', 'us_before.ogg', 'vengeful.ogg', 'victory.ogg', 'vixized.ogg', 'void.ogg', 'warden.ogg', 'wardensprize.ogg', 'warped_forest.ogg', 'waves.ogg', 'weepingsouls.ogg', 'witherdance.ogg', 'wuird.ogg', 'xziniron.ogg', 'yarona.ogg', 'zayz.ogg']
        },
        'more-music-discs': {
            songPath: 'Musik/More Music Discs/',
            imagePath: 'Musik/More Music Discs Pic',
            songs: ['anti.ogg', 'breeze.ogg', 'bricks.ogg', 'cascade.ogg', 'christmas.ogg', 'christmas_just_for_you.ogg', 'clouds.ogg', 'deepstate.ogg', 'ender_dragon.ogg', 'finale.ogg', 'forgot.ogg', 'hardcore.ogg', 'ice.ogg', 'k620_-_forgot_fan_made_ranboo.ogg', 'lost.ogg', 'media.io_0.ogg', 'media.io_1.ogg', 'media.io_3.ogg', 'media.io_4.ogg', 'media.io_6.ogg', 'media.io_8.ogg', 'media.io_10.ogg', 'media.io_11.ogg', 'media.io_12.ogg', 'media.io_13.ogg', 'media.io_14.ogg', 'media.io_15.ogg', 'media.io_16.ogg', 'media.io_17.ogg', 'media.io_18.ogg', 'minecraft.ogg', 'minecraft_-_christmas.ogg', 'minecraft_-_fan_made.ogg', 'ochre.ogg', 'parrots.ogg', 'pillaged.ogg', 'pumpkin_1.ogg', 'pumpkin_-_fan_made.ogg', 'rain.ogg', 'realrain.ogg', 'retri.ogg', 'revenge.ogg', 'shrieker.ogg', 'stridehop_reloaded.ogg', 'stridehop_reloaded__getmp3.pro_.ogg', 'tall.ogg', 'the_wither.ogg', 'time.ogg', 'time_fan_made_music_disc.ogg', 'void.ogg', 'wozzy.ogg']
        },
        'Quark': {
            songPath: 'Musik/Quark/',
            imagePath: 'Musik/Quark Pic/',
            songs: ['chatter.ogg', 'clock.ogg', 'crickets.ogg', 'drips.ogg', 'endermosh.ogg', 'fire.ogg', 'glimmering_weald.ogg', 'ocean.ogg', 'rain.ogg', 'wind.ogg']
        }
    };

    const LF = 'lastFolder';
    const LS = 'lastSong';
    const LV = 'lastVolume';
    const DT = 'Musik/More Musik Discs Pic/default.png';

    // -------------------- Referenzen zu den wichtigen HTML-Elementen --------------------
    const audioPlayer = document.getElementById('globalAudioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playPauseIcon = playPauseBtn.querySelector('img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const repeatBtn = document.getElementById('repeatBtn');
    const repeatIcon = document.getElementById('repeatIcon');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const shuffleIcon = document.getElementById('shuffleIcon');
    const progressBar = document.querySelector('.progress-bar');
    const currentTimeSpan = document.querySelector('.current-time');
    const durationSpan = document.querySelector('.duration');
    const currentSongNameSpan = document.getElementById('currentSongName');
    const currentSongThumbnail = document.getElementById('currentSongThumbnail');
    const volumeSlider = document.getElementById('volumeSlider');
    const muteUnmuteBtn = document.getElementById('muteUnmuteBtn');
    const volumeIcon = document.getElementById('volumeIcon');
    const folderListContainer = document.getElementById('folderList');
    const mainSongList = document.getElementById('mainSongList');
    const currentFolderTitle = document.getElementById('currentFolderTitle');
    const folderNavWrapper = document.querySelector('.folder-nav-wrapper');
    const volumeTooltip = document.getElementById('volumeTooltip');
    const volumeSliderWrapper = document.querySelector('.volume-slider-wrapper');
    const PL = 'Bilder/Play.svg';
    const PA = 'Bilder/Pause.svg';
    const RE = 'Bilder/Repeat.svg';
    const REA = 'Bilder/Repeat_All.svg';
    const R1 = 'Bilder/Repeat_One.svg';
    const SH = 'Bilder/Shuffle.svg';
    const SHA = 'Bilder/Shuffle_Active.svg';
    const M = 'Bilder/Mute.svg';
    const VL = 'Bilder/Low.svg';
    const VME = 'Bilder/Medium.svg';
    const VMA = 'Bilder/Max.svg';
    
    // -------------------- Zustandsvariablen --------------------
    let currentPlayingSongItem = null;
    let currentFolderKey = localStorage.getItem(LF) || Object.keys(musicFolders)[0];
    let currentPlaylistSongs = [];
    let activePlaybackPlaylist = [];
    let playbackPlaylistOrdered = [];
    let playbackPlaylistFolderKey = null;
    let repeatMode = 'off';
    let isShuffleActive = false;
    let currentPlaylistIndex = -1;
    let progressBarInterval = null;
    let lastKnownVolume = parseFloat(localStorage.getItem(LV)) || 0.1;

    audioPlayer.volume = lastKnownVolume;
    volumeSlider.value = lastKnownVolume;

    // -------------------- Hilfsfunktionen --------------------
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };
    const checkImageExists = async (url) => {
        return new Promise(resolve => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        });
    };
    const updateVolumeIcon = () => {
        const currentVolume = parseFloat(audioPlayer.volume);
        const percentage = Math.round(currentVolume * 100);
        if (audioPlayer.muted || currentVolume < 0.01) {volumeIcon.src = M; audioPlayer.volume = 0;}
        else if (currentVolume >= 0.80) {volumeIcon.src = VMA;}
        else if (currentVolume >= 0.40) {volumeIcon.src = VME;}
        else {volumeIcon.src = VL;}
        volumeTooltip.textContent = `${percentage}%`;
        if (currentVolume > 0 && !audioPlayer.muted) {
            lastKnownVolume = currentVolume;
            localStorage.setItem(LV, currentVolume);
        }
    };
    const updateVolumeTooltip = () => {
        const value = volumeSlider.value;
        const percentage = Math.round(value * 100);
        volumeTooltip.textContent = `${percentage}%`;
        const sliderWidth = volumeSlider.offsetWidth;
        const thumbSize = 12;
        const percentageProgress = (value - volumeSlider.min) / (volumeSlider.max - volumeSlider.min);
        const thumbPosition = percentageProgress * (sliderWidth - thumbSize) + (thumbSize / 2);
        volumeTooltip.style.left = `${thumbPosition}px`;
        volumeTooltip.style.transform = `translateX(-50%)`;
    };
    volumeSliderWrapper.addEventListener('wheel', (event) => {
        event.preventDefault();
        const step = 0.05;
        let newVolume = parseFloat(audioPlayer.volume);
        if (event.deltaY < 0) {newVolume = Math.min(1, newVolume + step);}
        else {newVolume = Math.max(0, newVolume - step);}
        audioPlayer.volume = newVolume;
        volumeSlider.value = newVolume;
        updateVolumeIcon();
        updateVolumeTooltip();
    }, { passive: false });

    // -------------------- Navigations-Logik (Fade-Steuerung) --------------------
    const updateFadeEffect = () => {
        if (window.innerWidth > 768) {
            folderNavWrapper.classList.remove('show-fade-left', 'show-fade-right');
            return;
        }
        const isScrollable = folderListContainer.scrollWidth > folderListContainer.clientWidth;
        if (!isScrollable) {
            folderNavWrapper.classList.remove('show-fade-left', 'show-fade-right');
            return;
        }
        const currentScroll = folderListContainer.scrollLeft;
        const maxScroll = folderListContainer.scrollWidth - folderListContainer.clientWidth;
        const tolerance = 20;
        const showLeftFade = currentScroll > tolerance;
        const showRightFade = currentScroll < maxScroll - tolerance;
        folderNavWrapper.classList.toggle('show-fade-left', showLeftFade);
        folderNavWrapper.classList.toggle('show-fade-right', showRightFade);
    };

    folderListContainer.addEventListener('scroll', updateFadeEffect);
    window.addEventListener('resize', updateFadeEffect);
    const updateRepeatMode = () => {
        repeatIcon.src = repeatMode === 'one' ? R1 : repeatMode === 'all' ? REA : RE;
        repeatBtn.classList.toggle('active-repeat', repeatMode !== 'off');
        repeatBtn.classList.toggle('active-repeat-one', repeatMode === 'one');
        audioPlayer.loop = repeatMode === 'one';
    };
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };
    const updateShuffleMode = () => {
        if (isShuffleActive) {
            activePlaybackPlaylist = shuffleArray([...playbackPlaylistOrdered]);
            if (currentPlayingSongItem) {
                const currentIndex = activePlaybackPlaylist.findIndex(item => item.dataset.path === currentPlayingSongItem.dataset.path);
                if (currentIndex > 0) {
                    const [currentItem] = activePlaybackPlaylist.splice(currentIndex, 1);
                    activePlaybackPlaylist.unshift(currentItem);
                }
            }
        }
        else {activePlaybackPlaylist = [...playbackPlaylistOrdered];}
    };
    // -------------------- Rendering-Funktionen (mit Fade-Update) --------------------
    const renderFolders = () => {
        folderListContainer.innerHTML = '';
        for (const [key, data] of Object.entries(musicFolders)) {
            const folderTitle = key.replace(/-/g, ' ').split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            const li = document.createElement('li');
            li.classList.add('folder-item');
            li.textContent = folderTitle;
            li.dataset.folderKey = key;
            li.addEventListener('click', () => {
                loadFolderSongs(key, folderTitle);
                li.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            });
            folderListContainer.appendChild(li);
        }
        updateFadeEffect();
    };

    const loadFolderSongs = async (folderKey, folderTitle) => {
        currentFolderKey = folderKey;
        localStorage.setItem(LF, folderKey);
        document.querySelectorAll('.folder-item').forEach(item => {
            item.classList.remove('active-folder');
        });
        const activeFolderItem = document.querySelector(`.folder-item[data-folder-key="${folderKey}"]`);
        if (activeFolderItem) {activeFolderItem.classList.add('active-folder');}
        currentFolderTitle.textContent = folderTitle;
        mainSongList.innerHTML = '';
        const paths = musicFolders[folderKey];
        const songs = paths.songs;
        for (const songName of songs) {
            const li = document.createElement('li');
            li.classList.add('song-item');
            li.dataset.path = `${paths.songPath}${songName}`;
            const cleanSongName = songName.replace(/\.(ogg|mp3)$/, '').replace(/_/g, ' ');
            li.dataset.name = cleanSongName;
            li.dataset.columnId = folderKey;
            li.title = cleanSongName;
            let finalImagePath = '';
            if (paths.imagePath && folderKey) {
                const songImage = document.createElement('img');
                songImage.classList.add('song-thumbnail');
                const potentialImagePath = `${paths.imagePath}${songName.replace(/\.(ogg|mp3)$/, '')}.png`;
                finalImagePath = DT;
                const imageExists = await checkImageExists(potentialImagePath);
                if (imageExists) {finalImagePath = potentialImagePath;}
                songImage.src = finalImagePath;
                li.dataset.imagePath = finalImagePath;
                li.appendChild(songImage);
            }
            else {li.dataset.imagePath = '';}

            const span = document.createElement('span');
            span.textContent = cleanSongName;
            li.appendChild(span);
            
            li.addEventListener('click', () => {
                handleSongClick(li);
            });
            mainSongList.appendChild(li);
        }
        currentPlaylistSongs = Array.from(mainSongList.children);
        if (playbackPlaylistFolderKey === folderKey) {
            playbackPlaylistOrdered = [...currentPlaylistSongs];
            if (isShuffleActive) { updateShuffleMode(); }
            else { activePlaybackPlaylist = [...playbackPlaylistOrdered]; }
        }
        const lastSongData = localStorage.getItem(LS);
        if (lastSongData) {
            const { path } = JSON.parse(lastSongData);
            const lastPlayedItem = document.querySelector(`.song-item[data-path="${path}"]`);

            if (lastPlayedItem && lastPlayedItem.dataset.columnId === folderKey) {
                lastPlayedItem.classList.add('active');
                currentPlayingSongItem = lastPlayedItem;
                currentPlaylistIndex = currentPlaylistSongs.indexOf(lastPlayedItem);
            }
        }
        updateFadeEffect();
    };

    // -------------------- Player-Logik --------------------
    const togglePlayPause = () => {
        if (audioPlayer.paused) {
            if (audioPlayer.src) {
                audioPlayer.play();
                playPauseIcon.src = PA;
                startProgressBarUpdate();
            }
        }
        else {
            audioPlayer.pause();
            playPauseIcon.src = PL;
            stopProgressBarUpdate();
        }
        updateDocumentTitle();
    };

    const playNextSong = () => {
        if (activePlaybackPlaylist.length === 0 && playbackPlaylistOrdered.length > 0) {
            activePlaybackPlaylist = [...playbackPlaylistOrdered];
        }
        if (activePlaybackPlaylist.length === 0) return;
        currentPlaylistIndex = activePlaybackPlaylist.indexOf(currentPlayingSongItem);
        if (currentPlaylistIndex === -1 && currentPlayingSongItem) {
            currentPlaylistIndex = activePlaybackPlaylist.findIndex(item => item.dataset.path === currentPlayingSongItem.dataset.path);
        }
        if (currentPlaylistIndex === -1) { currentPlaylistIndex = 0; }
        let nextIndex = currentPlaylistIndex + 1;
        if (nextIndex >= activePlaybackPlaylist.length) {
            if (repeatMode === 'all') { nextIndex = 0; }
            else { return; }
        }
        handleSongClickFromPlaylist(activePlaybackPlaylist[nextIndex]);
    };
    const playPrevSong = () => {
        if (activePlaybackPlaylist.length === 0 && playbackPlaylistOrdered.length > 0) {
            activePlaybackPlaylist = [...playbackPlaylistOrdered];
        }
        if (activePlaybackPlaylist.length === 0) return;
        currentPlaylistIndex = activePlaybackPlaylist.indexOf(currentPlayingSongItem);
        if (currentPlaylistIndex === -1 && currentPlayingSongItem) {
            currentPlaylistIndex = activePlaybackPlaylist.findIndex(item => item.dataset.path === currentPlayingSongItem.dataset.path);
        }
        if (currentPlaylistIndex === -1) { currentPlaylistIndex = 0; }
        let prevIndex = currentPlaylistIndex - 1;
        if (prevIndex < 0) {
            if (repeatMode === 'all') { prevIndex = activePlaybackPlaylist.length - 1; }
            else { return; }
        }
        handleSongClickFromPlaylist(activePlaybackPlaylist[prevIndex]);
    };
    const handleSongClick = (songItem) => {
        document.querySelectorAll('.song-item.active').forEach(item => {
            item.classList.remove('active');
        });
        songItem.classList.add('active');
        playbackPlaylistOrdered = [...currentPlaylistSongs];
        playbackPlaylistFolderKey = currentFolderKey;
        activePlaybackPlaylist = [...playbackPlaylistOrdered];
        currentPlayingSongItem = songItem;
        if (isShuffleActive) { updateShuffleMode(); }
        currentPlaylistIndex = activePlaybackPlaylist.indexOf(songItem);
        const songPath = songItem.dataset.path;
        const songName = songItem.dataset.name;
        const songImage = songItem.dataset.imagePath || DT; 
        currentSongNameSpan.textContent = songName;
        currentSongThumbnail.src = songImage;
        if (audioPlayer.src !== songPath) {
             audioPlayer.src = songPath;
             audioPlayer.load();
        }
        localStorage.setItem(LS, JSON.stringify({ path: songPath, name: songName, image: songImage }));
        if (audioPlayer.paused) {togglePlayPause();}
    };
    const handleSongClickFromPlaylist = (songItem) => {
        currentPlayingSongItem = songItem;
        document.querySelectorAll('.song-item.active').forEach(item => item.classList.remove('active'));
        const visibleItem = document.querySelector(`.song-item[data-path="${songItem.dataset.path}"]`);
        if (visibleItem) { visibleItem.classList.add('active'); }
        const songPath = songItem.dataset.path;
        const songName = songItem.dataset.name;
        const songImage = songItem.dataset.imagePath || DT;
        currentSongNameSpan.textContent = songName;
        currentSongThumbnail.src = songImage;
        audioPlayer.src = songPath;
        audioPlayer.load();
        audioPlayer.play().then(() => startProgressBarUpdate()).catch(() => {});
        localStorage.setItem(LS, JSON.stringify({ path: songPath, name: songName, image: songImage }));
        updateDocumentTitle();
    };

    // -------------------- Fortschrittsanzeige und Timer --------------------
    const startProgressBarUpdate = () => {
        if (progressBarInterval) {
            clearInterval(progressBarInterval);
        }
        progressBarInterval = setInterval(() => {
            const current = audioPlayer.currentTime;
            const duration = audioPlayer.duration;
            const progress = (current / duration) * 100;
            
            progressBar.value = current;
            currentTimeSpan.textContent = formatTime(current);
            progressBar.style.setProperty('--progress-width', `${progress}%`);
        }, 500);
    };

    const stopProgressBarUpdate = () => {
        clearInterval(progressBarInterval);
        progressBarInterval = null;
    };

    // -------------------- Event-Listener --------------------
    playPauseBtn.addEventListener('click', togglePlayPause);
    prevBtn.addEventListener('click', playPrevSong);
    nextBtn.addEventListener('click', playNextSong);
    repeatBtn.addEventListener('click', () => {
        if (isShuffleActive) {
            isShuffleActive = false;
            shuffleBtn.classList.remove('active-shuffle');
            shuffleIcon.src = SH;
        }
        repeatMode = repeatMode === 'off' ? 'one' : repeatMode === 'one' ? 'all' : 'off';
        updateRepeatMode();
    });
    shuffleBtn.addEventListener('click', () => {
        isShuffleActive = !isShuffleActive;
        if (isShuffleActive) {
            repeatMode = 'off';
            updateRepeatMode();
        }
        shuffleBtn.classList.toggle('active-shuffle', isShuffleActive);
        shuffleIcon.src = isShuffleActive ? SHA : SH;
        if (playbackPlaylistOrdered.length > 0) {
            updateShuffleMode();
        }
    });
    progressBar.addEventListener('input', () => {
        stopProgressBarUpdate(); 
        currentTimeSpan.textContent = formatTime(progressBar.value);
        const progress = (progressBar.value / progressBar.max) * 100;
        progressBar.style.setProperty('--progress-width', `${progress}%`);
    });
    progressBar.addEventListener('change', () => {
        audioPlayer.currentTime = progressBar.value;
        if (!audioPlayer.paused) {
            startProgressBarUpdate();
        }
    });

    // -------------------- Audio-Events --------------------
    audioPlayer.addEventListener('play', () => {
        playPauseIcon.src = PA;
    });
    audioPlayer.addEventListener('pause', () => {
        playPauseIcon.src = PL;
    });
    audioPlayer.addEventListener('ended', () => {
        stopProgressBarUpdate();
        if (repeatMode === 'one') {audioPlayer.play();}
        else {playNextSong();}
        updateDocumentTitle();
    });
    audioPlayer.addEventListener('loadedmetadata', () => {
        durationSpan.textContent = formatTime(audioPlayer.duration);
        progressBar.max = audioPlayer.duration;
        progressBar.value = 0;
        currentTimeSpan.textContent = formatTime(0);
        progressBar.style.setProperty('--progress-width', `0%`);
    });

    // -------------------- Lautstärkeregelung --------------------
    volumeSlider.addEventListener('input', () => {
        audioPlayer.volume = volumeSlider.value;
        audioPlayer.muted = (audioPlayer.volume < 0.01);
        updateVolumeIcon(); 
        updateVolumeTooltip();
    });
    volumeSlider.addEventListener('change', () => {
    });
    muteUnmuteBtn.addEventListener('click', () => {
        if (audioPlayer.muted) {
            let volumeToSet = parseFloat(localStorage.getItem(LV)) || 0.1;
            audioPlayer.volume = volumeToSet;
            audioPlayer.muted = false;
            volumeSlider.value = volumeToSet;
        }
        else {audioPlayer.muted = true; volumeSlider.value = 0;}
        updateVolumeIcon();
        updateVolumeTooltip(false);
    });
    audioPlayer.addEventListener('volumechange', updateVolumeIcon);


    // -------------------- Initialisierung --------------------
    const updateDocumentTitle = () => {
        const titlePrefix = 'Musiksammlung von JohansenBre';
        if (currentPlayingSongItem && !audioPlayer.paused) {
             document.title = `▶ ${currentPlayingSongItem.dataset.name} - ${titlePrefix}`;
        }
        else {document.title = titlePrefix;}
    };
    const initializeApp = () => {
        audioPlayer.volume = lastKnownVolume;
        volumeSlider.value = lastKnownVolume;
        updateVolumeIcon();
        updateVolumeTooltip();
        repeatMode = 'off';
        updateRepeatMode();
        shuffleIcon.src = SH;
        shuffleBtn.classList.remove('active-shuffle');
        renderFolders();
        let folderToLoad = currentFolderKey;
        let folderTitleToLoad = 'Wähle eine Sammlung';
        if (musicFolders[folderToLoad]) {
            folderTitleToLoad = folderToLoad.replace(/-/g, ' ').split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }
        else {
            folderToLoad = Object.keys(musicFolders)[0];
            if (folderToLoad) {
                 folderTitleToLoad = folderToLoad.replace(/-/g, ' ').split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
            }
        }
        loadFolderSongs(folderToLoad, folderTitleToLoad).then(() => {
            const lastSongData = localStorage.getItem(LS);
            if (lastSongData) {
                 const { path, name, image } = JSON.parse(lastSongData);
                 currentSongNameSpan.textContent = name;
                 currentSongThumbnail.src = image || DT; 
                 audioPlayer.src = path;
            }
            updateDocumentTitle();
        });
    };
    initializeApp();
});
