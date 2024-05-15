"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[70633],{466385:(e,r,t)=>{t.d(r,{Z:()=>o});function o(e,r,t){let o=[...e],s=o.splice(r,1)[0];return o.splice(t,0,s),o}},945488:(e,r,t)=>{t.d(r,{Z:()=>o});let o=(e,r)=>`${e}:${r||""}`},937310:(e,r,t)=>{t.d(r,{Z:()=>o});let o={AGGREGATED_COMMENTS:"aggregatedComments",AGGREGATED_COMMENT_REPLIES:"aggregated-comment-replies",BOARDFEED:"boardfeed",BOARDLESS_PINS:"boardless-pins",BOARD_SECTIONS:"board-sections",BOARD_SECTION_PINS:"board-section-pins",STORY_PINS_FEED:"story-pins-feed",PROFILE_PINS_FEED:"profile-pins-feed",PROFILE_BOARDS:"profileBoards",SEARCH_PINS:"searchPins",STORY_PIN_DATA:"storyPinData",TODAY_ARTICLE_INTEREST_FEED:"todayArticleInterestFeed",TODAY_TAB:"todayTabFeed",UNIFIED_COMMENTS:"unified-comments",TRIED_IT_FEED:"trieditfeed"}},670633:(e,r,t)=>{t.d(r,{J:()=>I,Z:()=>A});var o=t(466385),s=t(419821),i=t(414630),d=t(923024),a=t(945488),n=t(539426),c=t(949457),p=t(937310);let u=new Set(["PinResource","RepinResource"]),l={ApiResource:e=>e?.url==="/v3/orientation/nux_creator_recommendations/"?"nux-creator-recommendations":e?.url==="/v3/users/me/interests/"?`recommended-interests:${e.data?.blend_type}`:"",AggregatedActivityFeedResource:e=>`trieditfeed:${e.aggregated_pin_data_id}`,AggregatedCommentFeedResource:e=>`aggregated-comments:${e.objectId}`,AggregatedCommentReplyFeedResource:e=>`${p.Z.AGGREGATED_COMMENT_REPLIES}:${e.objectId}`,BoardlessPinsResource:e=>`boardless-pins:${e.userId}`,BestPinsFeedAltResource:e=>`idea-page-best-pins:${e.interest}`,BoardArchiveResource:()=>"archived-boards",BoardContentRecommendationResource:e=>`recommendation-feed:${e.id}`,BoardFeedResource:e=>`boardfeed:${e.board_id}`,BoardSectionsRepinResource:e=>`board-sections:${e.board_id}`,BoardSectionsResource:e=>`board-sections:${e.board_id}`,BoardSectionPinsResource:e=>`board-section-pins:${e.section_id}`,BoardsFeedResource:e=>`profile-boards:${e.username}`,BoardToolsFeedResource:e=>`board-tools:${e.boardId}`,ConversationsResource:()=>"conversations",DidItLikedByResource:e=>`triedit-likes:${e.didItDataId}`,DidItUserFeedResource:e=>`profile-tried:${e.username}`,HolidaySpotlightResource:e=>`holiday-spotlight:${e.storyType}`,InterestResource:e=>`klp-pins:${e.interest}`,MoreIdeasTabsBoardsResource:()=>"homefeed-more-ideas-tabs",NewsHubResource:()=>"notifications",NewsHubDetailsResource:e=>`newshubdetail:${e.news_id}`,NuxInterestsResource:()=>"nuxTopics",PinsFromBrandResource:e=>`brand-pins:${e.pin}`,ReactionsResource:e=>`reactions:${e.pin_id}`,RelatedArticlesResource:e=>`related-articles:${e.article_id}`,RelatedModulesResource:e=>`related-modules:${e.pin_id}`,RelatedPinFeedResource:e=>`related-pins:${e.pin}`,RelatedProductFeedResource:e=>"pin"===e.shop_source?`closeup-related-products:${e.pin}`:`related-products:${e.pin}`,RelatedStreamResource:e=>`related-story-pins:${e.pinId}`,SearchResource:e=>{let r=`search:${e.scope}:${e.query}:${e.filters||""}:${e.article||""}`;return e.auto_correction_disabled?`${r}:auto-correction-disabled`:r},BaseSearchResource:e=>{let r=`search:${e.scope}:${e.query}:${e.filters||""}:${e.appliedProductFilters}:${e.article||""}`;return e.auto_correction_disabled?`${r}:auto-correction-disabled`:r},SectionToolsFeedResource:e=>`section-tools:${e.sectionId}`,ShareSuggestionsTypeaheadResource:e=>`share-suggestions:${e.board||e.user}:${e.term}`,ShoppingFeedModularizedResource:e=>e.saved_products_only?`board-shop-saved:${e.board_id}`:`board-shop-related:${e.board_id}`,StoryFeedResource:e=>`story-feed:${e.feed_type}:${e.request_params}`,SuggestedCreatorFollowsResource:()=>"suggested-creator-follows",StoryPinTaggedProductsResource:()=>"story-pin-tagged-products",TodayArticleFeedResource:e=>`today-article:${e.id}`,IdeasHubTodayArticlesResource:e=>`today-article:${e.interest_id}`,TodayTabInterestFeedResource:e=>`today-article-interestfeed:${e.interest_id}`,TodayTabResource:()=>"today-tab",SeoTier1CandidateResource:()=>"tier1-feed",UnifiedCommentsResource:e=>`unified-comments:${e.aggregated_pin_id}`,UserActivityPinsResource:e=>`profile-pins-feed:${e.user_id}`,UserHomefeedResource:e=>e.pin_quiz?"pin-quiz":"homefeed",UserFollowingResource:e=>`user-following:${e.username}`,UserRecentActivityResource:e=>`user-recent-activity:${e.filter_type}`,UserStoryPinsFeedResource:e=>`story-pins-feed:${e.user_id}`,VideosFeedResource:()=>"videos-feed",VisualLiveSearchResource:e=>`visual-search:${e.pin_id}:${e.crop.x}${e.crop.y}${e.crop.w}${e.crop.h}`,VisualLiveSearchProductFeedResource:e=>`visual-search-products:${e.pin_id}:${e.crop.x}${e.crop.y}${e.crop.w}${e.crop.h}`,VisualSearchFlashlightUnifiedResource:e=>`related-products-unified:${e.pin_id}`,BoardFollowingResource:e=>`board-following:${e.username}`,InterestFollowingResource:e=>`topic-following:${e.username}`,UserPinsResource:e=>`profile-pins:${e.username}`,TopicFeedResource:e=>e.best_pins?`best-topic-pins:${e.interest}`:`topic-pins:${e.interest}`},_={AggregatedActivityFeedResource:({options:{aggregated_pin_data_id:e}})=>({type:p.Z.TRIED_IT_FEED,id:e}),AggregatedCommentFeedResource:({options:{objectId:e}})=>({type:p.Z.AGGREGATED_COMMENTS,id:e}),AggregatedCommentReplyFeedResource:({options:{isUnifiedComment:e,objectId:r}})=>({type:e?p.Z.AGGREGATED_COMMENT_REPLIES:p.Z.AGGREGATED_COMMENTS,id:r,reversed:!0}),BoardFeedResource:({options:{board_id:e}})=>({type:p.Z.BOARDFEED,id:e}),BoardlessPinsResource:({options:{userId:e}})=>({type:p.Z.BOARDLESS_PINS,id:e}),BoardSectionPinsResource:({options:{section_id:e}})=>({type:p.Z.BOARD_SECTION_PINS,id:e}),BoardSectionsResource:({options:{board_id:e}})=>({type:p.Z.BOARD_SECTIONS,id:e}),BoardsResource:({options:{username:e,sort:r}})=>({type:p.Z.PROFILE_BOARDS,id:(0,a.Z)(e,r)}),BaseSearchResource:({options:{auto_correction_disabled:e,appliedProductFilters:r,scope:t,filters:o,query_pin_sigs:s,query:a,user:n},response:c})=>({type:p.Z.SEARCH_PINS,id:(0,i.Tb)({appliedProductFilters:r,autoCorrectionDisabled:e,filters:o,query:a,selectedPinImgSig:s,scope:t,user:n}),items:c.resource_response.data?.results?(0,d.L)(c.resource_response.data.results).filteredResults:[]}),DidItCommentsResource:({options:{objectId:e}})=>({type:p.Z.AGGREGATED_COMMENTS,id:e,reversed:!0}),DidItUserFeedResource:({options:{username:e}})=>({type:p.Z.TRIED_IT_FEED,id:e}),IdeasHubTodayArticlesResource:({options:{interest_id:e}})=>({type:p.Z.TODAY_TAB,id:e}),RelatedArticlesResource:({options:{article_id:e}})=>({type:p.Z.TODAY_TAB,id:e}),StoryPinDraftsResource:({options:{userId:e}})=>({type:p.Z.STORY_PIN_DATA,id:e}),TodayTabInterestFeedResource:({options:{interest_id:e}})=>({type:p.Z.TODAY_ARTICLE_INTEREST_FEED,id:e}),TodayTabResource:()=>({type:p.Z.TODAY_TAB,id:"todayTab"}),UnifiedCommentsPreviewResource:({options:{aggregated_pin_id:e}})=>({type:p.Z.UNIFIED_COMMENTS,id:e}),UnifiedCommentsResource:({options:{aggregated_pin_id:e,is_reversed:r}})=>({type:p.Z.UNIFIED_COMMENTS,id:e,reversed:r}),UserActivityPinsResource:({options:{user_id:e}})=>({type:p.Z.PROFILE_PINS_FEED,id:e}),UserStoryPinsFeedResource:({response:e,options:{user_id:r}})=>({type:p.Z.STORY_PINS_FEED,id:r,items:e.resource_response.data||[]})},R=(e,{pinId:r,feedId:t})=>e[t]?{...e,[t]:e[t].filter(e=>!("pin"===e.type&&e.id===r))}:e,y=(e,{pinId:r,feedId:t})=>e[t]?{...e,[t]:[{type:"pin",id:r},...e[t]]}:e,E=(e,{pinId:r,oldFeedId:t,newFeedId:o})=>t===o?e:y(R(e,{pinId:r,feedId:t}),{pinId:r,feedId:o}),I=(e,r)=>e in l?l[e](r):null,m=(e,r)=>{switch(e.type){case"story":return{id:e.id,type:"story",story_type:e.story_type};case"module":return{id:e.id,type:"module",name:e.name};case"user":return{id:e.id,type:"user"};case"board":return r===p.Z.PROFILE_BOARDS?{id:e.id,type:"board",onProfile:!0,profileGroup:e.archived_by_me_at?"archived":e.privacy||"public"}:{id:e.id,type:"board",onProfile:!1};case"board_section":return{type:"boardsection",id:e.id};case"triedit":return{type:"triedit",id:e.id};case"aggregatedcomment":return{type:"aggregatedcomment",id:e.id};case"home_feed_tab":return{type:"home_feed_tab",id:e.id,name:e.name};case"storypindata":return{id:e.id,type:"storypindata"};case"todayarticle":return{type:"todayarticle",id:e.id};case"unifiedcommentspreview":return"userdiditdata"===e.unified_comment.type?{type:"triedit",id:e.unified_comment.id}:{type:"aggregatedcomment",id:e.unified_comment.id};default:return{type:"pin",id:e.id}}},f=(e,r)=>r?`board-section-pins:${r}`:`boardfeed:${e}`,S=(e,r,t)=>{let o=t||n.Z[e];if(o===c.LR)return r.result;if(o===c.sN)return r.result.map(e=>({id:e,schema:"board"}));if(o===c.Gn)return r.result.map(e=>({id:e,schema:"user"}));if(o===c.Ht)return r.result.map(e=>({id:e,schema:"invite"}));if(o===c.fE)return r.result.map(e=>({id:e,schema:"reaction"}));if("object"==typeof o){let e=Object.entries(o).find(([,e])=>e===c.LR);if(e)return r.result[e[0]]}return null},T=(e,r)=>e.map(e=>{let{id:t,schema:o,type:s}=e;return"home_feed_tabs"===s?e:o?{id:t,type:o,trackingParams:"pin"===o?r.pins[t].tracking_params:void 0,user_id:void 0}:null}).filter(Boolean),D=(e,r,t)=>Object.keys(e).reduce((o,s)=>{let i=e[s]||[],d=i.filter(e=>!(e.type===r&&e.id===t));return i.length!==d.length&&(o[s]=d),o},{...e}),A=(e={},r)=>{switch(r.type){case s.zP:case s.aW:{let{payload:t}=r,{resource:o,options:i,normalizedResponse:d,schema:a}=t;if(d&&o in l){let t=S(o,d,a);if(t&&Array.isArray(t)){let a=l[o](i);if("ShoppingFeedModularizedResource"===o){let{board_id:r,saved_products_only:o}=i??{},s=`board-shop-related:${r}`,a=`board-shop-saved:${r}`,n=`board-shop-saved-preview:${r}`,c=[...e[s]||[]],p=[...e[a]||[]],u=[...e[n]||[]],l=T(t,d.entities);return l.forEach(e=>{o?p.push(e):d.entities.pins&&d.entities.pins[e.id]?.board===r?u.push(e):c.push(e)}),{...e,[s]:c,[a]:p,[n]:u}}if("BoardToolsFeedResource"===o||"SectionToolsFeedResource"===o)return{...e,[a]:t};if("UnifiedCommentsResource"===o){let o=T(t,d.entities);if(e[a]&&s.aW===r.type)return{...e,[a]:[...e[a],...o]};return{...e,[a]:o}}{let o=[...r.type===s.aW&&e[a]||[],...T(t,d.entities)];return{...e,[a]:o}}}}else{let{data:o}=t.response.resource_response;if(!t.options?.redux_normalize_feed)return e;let i=_[t.resource]({options:t.options,response:t.response});if(i){let{type:t,id:d,items:a,reversed:n}=i,c=(a||o||[]).map(e=>m(e,t));n&&(c=c.reverse());let p=`${t}:${d}`,u=e[p];if(u||r.type!==s.aW){let t=u||[],o=c;return r.type===s.aW&&(o=n?c.concat(t):t.concat(c)),{...e,[p]:o}}}}break}case"FEED_ITEM_REORDERED":{let{payload:{feedType:t,feedId:s,itemType:i,targetItemId:d,sourceItemId:a}}=r,n=`${t}:${s}`,c=e[n]||[],u=-1,l=-1;if([p.Z.BOARDFEED,p.Z.BOARD_SECTION_PINS,p.Z.BOARD_SECTIONS,"profileBoards"].includes(t)&&(u=c.findIndex(e=>e.type===i&&e.id===a),l=c.findIndex(e=>e.type===i&&e.id===d)),-1!==u&&-1!==l)return{...e,[n]:(0,o.Z)(c,u,l)};break}case"FEED_ITEMS_REMOVED":{let{payload:{feedType:t,feedId:o,inverseSelection:s,itemType:i,itemIds:d=[]}}=r,a=`${t}:${o}`,n=e[a]||[];if(n&&n.length>0&&(t===p.Z.BOARD_SECTION_PINS||t===p.Z.BOARDFEED)){let r=n.filter(e=>{let r=d.includes(e.id),t=e.type===i&&(s&&!r||!s&&r);return!t}),t=!!r.find(e=>"pin"===e.type);return{...e,[a]:t?r:[]}}if(n&&n.length>0&&t===p.Z.BOARD_SECTIONS){let r=n.filter(e=>{let r=d.includes(e.id);return!(e.type===i&&r)});return{...e,[a]:r}}if(n&&n.length>0&&(t===p.Z.AGGREGATED_COMMENTS||t===p.Z.BOARDLESS_PINS||t===p.Z.PROFILE_PINS_FEED||t===p.Z.STORY_PINS_FEED||t===p.Z.UNIFIED_COMMENTS||t===p.Z.TRIED_IT_FEED||t===p.Z.STORY_PIN_DATA)){let r=n.filter(e=>{let r=d.includes(e.id);return!(e.type===i&&r)});return{...e,[a]:r}}break}case"FEED_ITEMS_ADDED":{let{payload:{feedType:t,feedId:o,itemType:s,itemIds:i=[],prepend:d}}=r,a=`${t}:${o}`,n=e[a]||[];if(n&&(t===p.Z.BOARD_SECTION_PINS||t===p.Z.BOARDFEED||t===p.Z.BOARDLESS_PINS)){let r=i.map(e=>({id:e,type:s})),t=0;"story"===(n[0]||{}).type&&(t=1),"story"===(n[1]||{}).type&&(t=2);let o=[...n.slice(0,t),...r,...n.slice(t)];return{...e,[a]:o}}if(n&&t===p.Z.BOARD_SECTIONS){let r=[...i].reverse().map(e=>({id:e,type:"boardsection"})),t=n?[...r,...n]:[...r];return{...e,[a]:t}}if(t===p.Z.AGGREGATED_COMMENTS||t===p.Z.AGGREGATED_COMMENT_REPLIES||t===p.Z.PROFILE_PINS_FEED||t===p.Z.STORY_PINS_FEED||t===p.Z.UNIFIED_COMMENTS){let r=i.map(e=>({id:e,type:s})),t=n?[...d?r:n,...d?n:r]:r;return{...e,[a]:t}}if(t===p.Z.TRIED_IT_FEED){let r=i.map(e=>({id:e,type:s})),t=n?[...r,...n]:r;return{...e,[a]:t}}break}case"FEED_INVALIDATE":{let{payload:{feedType:t,feedId:o}}=r,s=`${t}:${o}`,i=e[s]||[];if(i)return{...e,[s]:null};break}case"APPEND_FEED_ITEMS":{let{payload:{id:t,items:o,options:s}}=r,i=e[t];if(!i)return{...e,[t]:o};{let r;return r=s.isPrepend?i[0]&&"story"===i[0].type?[].concat(i[0],o,i.slice(1)):o.concat(i):i.concat(o),{...e,[t]:r}}}case"PIN_DELETE":{let{payload:{pinId:t}}=r;return D(e,"pin",t)}case"BOARD_ARCHIVE":{let{payload:{boardId:t,username:o}}=r,s=`profile-boards:${o??""}`;if(e[s])return{...e,[s]:e[s].filter(e=>e.id!==t)};break}case"BOARD_UNARCHIVE":{let{payload:{boardId:t}}=r,o="archived-boards";if(e[o])return{...e,[o]:e[o].filter(e=>e.id!==t)};break}case"BOARD_DELETE":{let{payload:{boardId:t}}=r;return D(e,"board",t)}case"BOARD_SECTION_DELETE":{let{payload:{boardSectionId:t}}=r;return D(e,"boardsection",t)}case"PINS_MOVE":{let{payload:{source:t,target:o,pinIds:s,userId:i}}=r,d=t.boardlessPins&&i&&`boardless-pins:${i}`||t.boardId&&f(t.boardId,t.sectionId),a=f(o.boardId,o.sectionId);return s.reduce((e,r)=>E(e,{pinId:r,oldFeedId:d,newFeedId:a}),e)}case"PINS_MOVE_ALL":{let{payload:{source:t,target:o,excludePinIds:s}}=r,i=f(t.boardId,t.sectionId),d=f(o.boardId,o.sectionId),a={...e,[i]:s.map(e=>({type:"pin",id:e}))};return delete a[d],a}case"PIN_EDIT":{let{payload:{pinId:t,boardId:o,sectionId:s="",source:{boardId:i,sectionId:d}}}=r,a=f(i,d),n=f(o,s);return E(e,{pinId:t,oldFeedId:a,newFeedId:n})}case s.AF:if(u.has(r.payload.resource)){let t;let o=r.payload.response.resource_response.data,{board:s}=o;if("quick_saves"===s.layout)t=`boardless-pins:${r.payload.options.user_id}`;else{let e=r.payload.options.section;t=e?`board-section-pins:${e}`:`boardfeed:${s.id}`}if(e[t]){let r={...e},s={id:o.id,type:"pin",trackingParams:o?.tracking_params};return r[t]=[s].concat(e[t]),r}}if("BoardSectionResource"===r.payload.resource&&r.payload.normalizedResponse){let t=r.payload.normalizedResponse.result,o=r.payload.normalizedResponse.entities.boardsections[t].board,s=`board-sections:${o}`;if(e[s]){let r={...e};return r[s]=[{id:t,type:"boardsection"}].concat(e[s]),r}}if("AggregatedCommentResource"===r.payload.resource&&r.payload.normalizedResponse){let t=r.payload.normalizedResponse.result,o={id:t,type:"aggregatedcomment"},s={...e};for(let t of["aggregated-comments","unified-comments"]){let i=`${t}:${r.payload.options.objectId}`;e[i]&&(s={...s,[i]:[o].concat(s[i])})}return s}if("AggregatedCommentReplyResource"===r.payload.resource&&r.payload.normalizedResponse){let t=`${p.Z.AGGREGATED_COMMENT_REPLIES}:${r.payload.options.objectId}`;return{...e,[t]:[...e[t]||[],{id:r.payload.normalizedResponse.result,type:"aggregatedComment"}]}}if("ReactionsResource"===r.payload.resource&&r.payload.normalizedResponse){let{reaction_pin_id:t,reaction_type:o}=r.payload.options;if("reaction"===r.payload.options.action_type){let s=`reactions:${r.payload.options.pin_id}`,i={...e},d={id:`${t}:${r.payload.options.user_id}:${o}`,type:"reaction",trackingParams:void 0};return i[s]=[d].concat(e[s]),i}if("unreaction"===r.payload.options.action_type){let o=`${t}:${r.payload.options.user_id}`;return D(e,"reaction",o)}}break;case"COMPLETE_STORY":{let{payload:{storyId:t}}=r;return D(e,"story",t)}}return e}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/70633-670aecdd0aeb3d56.mjs.map