export default {
  'youtube video': {
    query: 'yout',
    results: [
      {
        data: {
          deepResults: [
            {
              links: [
                {
                  extra: {
                    duration: 117,
                    thumbnail: 'https://i.ytimg.com/vi/bnKFaAS30X8/hqdefault.jpg',
                    views: '1807250'
                  },
                  title: 'NASA & TRAPPIST-1: A Treasure Trove of Planets Found',
                  url: 'https://www.youtube.com/watch?v=bnKFaAS30X8'
                },
                {
                  extra: {
                    duration: 1253,
                    thumbnail: 'https://i.ytimg.com/vi/VYWyz3cwSPE/hqdefault.jpg',
                    views: '66334'
                  },
                  title: 'University’s Update on NCAA Case',
                  url: 'https://www.youtube.com/watch?v=VYWyz3cwSPE'
                },
                {
                  extra: {
                    thumbnail: 'https://i.ytimg.com/vi/5xMXQLoEGCg/hqdefault.jpg',
                    views: '1365327'
                  },
                  title: 'Alex Trebek Reading The Rap Category Proves He Might Be The Best Rapper Alive',
                  url: 'https://www.youtube.com/watch?v=5xMXQLoEGCg'
                }
              ],
              type: 'videos'
            },
            {
              links: [
                {
                  title: 'PietSmiet',
                  url: 'https://www.youtube.com/user/PietSmittie'
                },
                {
                  title: 'Gronkh',
                  url: 'https://www.youtube.com/user/Gronkh'
                },
                {
                  title: 'Musik',
                  url: 'https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ'
                },
                {
                  title: 'Verlauf',
                  url: 'https://www.youtube.com/feed/history'
                }
              ],
              type: 'buttons'
            }
          ],
          description: 'Zeige deine Videos deinen Freunden, Familienmitgliedern und der ganzen Welt.',
          extra: {
            __message__: {
              buttons: [
                {
                  action: 'dismiss',
                  text: 'dismiss'
                }
              ],
              pref: 'showYoutubeDynamicMsg',
              searchTerm: 'myQuery',
              text: 'ytDynamicSearch'
            },
            name_cat: 'ez_video-recommended'
          },
          friendlyUrl: 'youtube.com',
          title: 'YouTube',
          subType: {
            class: 'EntityVideo',
            trigger_method: 'rh_query',
            ez: 'deprecated',
            i: 0,
            cs: 0
          },
          template: 'entity-video-1',
          kind: [
            'X|{\'class\':\'EntityVideo\',\'trigger_method\':\'rh_query\',\'ez\':\'deprecated\',\'i\':0,\'cs\':0}'
          ]
        },
        title: 'YouTube',
        url: 'https://www.youtube.com/?gl=DE&hl=de',
        description: 'Zeige deine Videos deinen Freunden, Familienmitgliedern und der ganzen Welt.',
        originalUrl: 'https://www.youtube.com/?gl=DE&hl=de',
        type: 'cliqz-extra',
        text: 'yout',
        maxNumberOfSlots: 3
      },
      {
        url: 'https://www.youtube.com/watch?v=f0UB06v7yLY',
        friendlyUrl: 'youtube.com/watch',
        href: 'https://www.youtube.com/watch?v=f0UB06v7yLY',
        title: "Donald Trump's best lines during his 2016 speech",
        description: 'Donald Trump announced he is running for president; here are some of the best lines from his speech.',
        kind: [
          'v'
        ],
        provider: 'cliqz',
        template: 'single-video',
        text: 'youtb donald trump',
        type: 'bm',
        meta: { },
        data: {
          deepResults: [

          ],
          extra: {
            rich_data: {
              duration: 132,
              views: '1212054',
              thumbnail: 'https://i.ytimg.com/vi/f0UB06v7yLY/mqdefault.jpg'
            },
            image: {
              src: 'https://i.ytimg.com/vi/f0UB06v7yLY/default.jpg'
            },
            alternatives: [

            ],
            m_url: 'https://m.youtube.com/watch?v=f0UB06v7yLY',
            language: {

            }
          },
          kind: [
            'v'
          ],
          template: 'single-video'
        }
      }
    ]
  }
};
