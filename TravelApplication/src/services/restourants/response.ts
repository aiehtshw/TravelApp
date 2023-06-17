export interface RestourantAPIResponse {
  loading:boolean
  data: Daum[]
  filters: Filters
  filters_v2: FiltersV2
  restaurant_availability_options: RestaurantAvailabilityOptions
  open_hours_options: OpenHoursOptions
  paging: Paging
}

export interface Daum {
  location_id: string
  name?: string
  latitude?: string
  longitude?: string
  num_reviews?: string
  timezone?: string
  location_string?: string
  photo?: Photo
  awards?: any[]
  doubleclick_zone: string
  preferred_map_engine?: string
  raw_ranking?: string
  ranking_geo?: string
  ranking_geo_id?: string
  ranking_position?: string
  ranking_denominator?: string
  ranking_category?: string
  ranking?: string
  distance: any
  distance_string: any
  bearing: any
  rating?: string
  is_closed?: boolean
  open_now_text?: string
  is_long_closed?: boolean
  price_level?: string
  description?: string
  web_url?: string
  write_review?: string
  ancestors: Ancestor[]
  category?: Category
  subcategory?: Subcategory2[]
  parent_display_name?: string
  is_jfy_enabled?: boolean
  nearest_metro_station?: any[]
  phone?: string
  website?: string
  address_obj?: AddressObj
  address?: string
  hours?: Hours
  is_candidate_for_contact_info_suppression?: boolean
  cuisine?: Cuisine[]
  dietary_restrictions?: DietaryRestriction[]
  establishment_types?: EstablishmentType[]
  price?: string
  email?: string
  ad_position?: string
  ad_size?: string
  detail?: string
  page_type?: string
  mob_ptype?: string
  booking?: Booking
  reserve_info?: ReserveInfo
}

export interface Photo {
  images: Images
  is_blessed: boolean
  uploaded_date: string
  caption: string
  id: string
  helpful_votes: string
  published_date: string
  user: User
}

export interface Images {
  small: Small
  thumbnail: Thumbnail
  original: Original
  large: Large
  medium: Medium
}

export interface Small {
  width: string
  url: string
  height: string
}

export interface Thumbnail {
  width: string
  url: string
  height: string
}

export interface Original {
  width: string
  url: string
  height: string
}

export interface Large {
  width: string
  url: string
  height: string
}

export interface Medium {
  width: string
  url: string
  height: string
}

export interface User {
  user_id: any
  member_id: string
  type: string
}

export interface Ancestor {
  subcategory: Subcategory[]
  name: string
  abbrv: any
  location_id: string
}

export interface Subcategory {
  key: string
  name: string
}

export interface Category {
  key: string
  name: string
}

export interface Subcategory2 {
  key: string
  name: string
}

export interface AddressObj {
  street1: string
  street2?: string
  city: string
  state: any
  country: string
  postalcode?: string
}

export interface Hours {
  week_ranges: WeekRange[][]
  timezone: string
}

export interface WeekRange {
  open_time: number
  close_time: number
}

export interface Cuisine {
  key: string
  name: string
}

export interface DietaryRestriction {
  key: string
  name: string
}

export interface EstablishmentType {
  key: string
  name: string
}

export interface Booking {
  provider: string
  url: string
}

export interface ReserveInfo {
  id: string
  provider: string
  provider_img: string
  url: string
  booking_partner_id: any
  racable: boolean
  api_bookable: boolean
  timeslots: any
  bestoffer: any
  timeslot_offers: any
  button_text: string
  disclaimer_text: any
  banner_text: any
}

export interface Filters {
  rac_deals_only: RacDealsOnly
  rating: Rating
  restaurant_mealtype: RestaurantMealtype
  exclude_locations: ExcludeLocations
  dietary_restrictions: DietaryRestrictions
  rsrv: Rsrv
  restaurant_tagcategory: RestaurantTagcategory
  open_now: OpenNow
  min_rating: MinRating
  subcategory: Subcategory3
  prices_restaurants: PricesRestaurants
  restaurant_dining_options: RestaurantDiningOptions
  restaurant_tagcategory_standalone: RestaurantTagcategoryStandalone
  restaurant_styles: RestaurantStyles
  combined_food: CombinedFood
}

export interface RacDealsOnly {
  false: False
  true: True
}

export interface False {
  count: string
  label: string
  selected: boolean
}

export interface True {
  count: string
  label: string
  selected: boolean
}

export interface Rating {
  all: All
  "1": N1
  "2": N2
  "3": N3
  "4": N4
  "5": N5
}

export interface All {
  count: string
  label: string
  selected: boolean
}

export interface N1 {
  count: string
  label: string
  selected: boolean
}

export interface N2 {
  count: string
  label: string
  selected: boolean
}

export interface N3 {
  count: string
  label: string
  selected: boolean
}

export interface N4 {
  count: string
  label: string
  selected: boolean
}

export interface N5 {
  count: string
  label: string
  selected: boolean
}

export interface RestaurantMealtype {
  all: All2
  "10606": N10606
  "10598": N10598
  "10597": N10597
  "10599": N10599
}

export interface All2 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10606 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10598 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10597 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10599 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface ExcludeLocations {
  filtered: Filtered
  all: All3
}

export interface Filtered {
  count: string
  label: string
}

export interface All3 {
  count: string
  label: string
}

export interface DietaryRestrictions {
  all: All4
  "10992": N10992
  "10697": N10697
  "10751": N10751
  "10665": N10665
}

export interface All4 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10992 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10697 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10751 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10665 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface Rsrv {
  false: False2
  true: True2
}

export interface False2 {
  count: string
  label: string
  selected: boolean
}

export interface True2 {
  count: string
  label: string
  selected: boolean
}

export interface RestaurantTagcategory {
  all: All5
  "9909": N9909
  "10591": N10591
  "9900": N9900
  "16556": N16556
  "9901": N9901
  "11776": N11776
  "16548": N16548
}

export interface All5 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N9909 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10591 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N9900 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N16556 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N9901 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N11776 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N16548 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface OpenNow {
  false: False3
  true: True3
}

export interface False3 {
  count: string
  label: string
  selected: boolean
}

export interface True3 {
  count: string
  label: string
  selected: boolean
}

export interface MinRating {
  "3": N32
  "4": N42
  "5": N52
}

export interface N32 {
  count: string
  label: string
  selected: boolean
}

export interface N42 {
  count: string
  label: string
  selected: boolean
}

export interface N52 {
  count: string
  label: string
  selected: boolean
}

export interface Subcategory3 {
  all: All6
  sit_down: SitDown
  cafe: Cafe
  fast_food: FastFood
}

export interface All6 {
  count: string
  label: string
  selected: boolean
}

export interface SitDown {
  count: string
  label: string
  selected: boolean
}

export interface Cafe {
  count: string
  label: string
  selected: boolean
}

export interface FastFood {
  count: string
  label: string
  selected: boolean
}

export interface PricesRestaurants {
  all: All7
  "10954": N10954
  "10953": N10953
  "10955": N10955
}

export interface All7 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10954 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10953 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10955 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface RestaurantDiningOptions {
  all: All8
  "21379": N21379
  "20990": N20990
  "11780": N11780
  "20989": N20989
  "10602": N10602
  "10612": N10612
  "10601": N10601
  "10854": N10854
  "10603": N10603
  "10702": N10702
  "10859": N10859
  "16547": N16547
  "21271": N21271
  "10870": N10870
  "10862": N10862
  "10861": N10861
  "10600": N10600
}

export interface All8 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21379 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20990 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N11780 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20989 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10602 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10612 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10601 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10854 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10603 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10702 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10859 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N16547 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21271 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10870 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10862 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10861 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10600 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface RestaurantTagcategoryStandalone {
  all: All9
  "9909": N99092
  "10591": N105912
  "9900": N99002
  "16556": N165562
  "9901": N99012
  "11776": N117762
  "16548": N165482
}

export interface All9 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N99092 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N105912 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N99002 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N165562 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N99012 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N117762 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N165482 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface RestaurantStyles {
  all: All10
  "10613": N10613
  "10604": N10604
  "12504": N12504
  "10614": N10614
  "10605": N10605
  "10608": N10608
  "10607": N10607
  "10609": N10609
  "11777": N11777
  "10610": N10610
}

export interface All10 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10613 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10604 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N12504 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10614 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10605 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10608 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10607 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10609 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N11777 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10610 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface CombinedFood {
  "20697": N20697
  "20333": N20333
  "20332": N20332
  "20339": N20339
  "20699": N20699
  "10899": N10899
  "10898": N10898
  "10659": N10659
  "5379": N5379
  "10770": N10770
  "11740": N11740
  "10651": N10651
  "10893": N10893
  "11742": N11742
  "10653": N10653
  "10774": N10774
  "11741": N11741
  "10894": N10894
  "11744": N11744
  "10655": N10655
  "10654": N10654
  "10896": N10896
  "20465": N20465
  "20349": N20349
  "10668": N10668
  "4617": N4617
  "10788": N10788
  "10669": N10669
  "10660": N10660
  "10662": N10662
  "10782": N10782
  "10661": N10661
  "10664": N10664
  "10784": N10784
  "10663": N10663
  "10666": N10666
  "20312": N20312
  "20552": N20552
  "20318": N20318
  "20317": N20317
  "20316": N20316
  "20314": N20314
  "20556": N20556
  "10756": N10756
  "10634": N10634
  "10876": N10876
  "10636": N10636
  "10878": N10878
  "10639": N10639
  "10752": N10752
  "10633": N10633
  "11722": N11722
  "10753": N10753
  "20320": N20320
  "20561": N20561
  "9899": N9899
  "20325": N20325
  "10767": N10767
  "10646": N10646
  "10766": N10766
  "10645": N10645
  "10648": N10648
  "10769": N10769
  "10647": N10647
  "11739": N11739
  "10649": N10649
  "11738": N11738
  "10640": N10640
  "10760": N10760
  "10642": N10642
  "10884": N10884
  "10641": N10641
  "10762": N10762
  "10765": N10765
  "10643": N10643
  "10764": N10764
  "10885": N10885
  "20533": N20533
  "20532": N20532
  "20534": N20534
  "10617": N10617
  "10618": N10618
  "10732": N10732
  "20544": N20544
  "20542": N20542
  "22047": N22047
  "20549": N20549
  "20547": N20547
  "10745": N10745
  "10744": N10744
  "10747": N10747
  "10626": N10626
  "10746": N10746
  "10628": N10628
  "10749": N10749
  "11717": N11717
  "10748": N10748
  "10627": N10627
  "10741": N10741
  "10620": N10620
  "21071": N21071
  "10622": N10622
  "10621": N10621
  "10742": N10742
  "5086": N5086
  "20752": N20752
  "20076": N20076
  "20075": N20075
  "21285": N21285
  "10709": N10709
  "20754": N20754
  "10714": N10714
  "20074": N20074
  "20071": N20071
  "21175": N21175
  "10725": N10725
  "21174": N21174
  "21293": N21293
  "20730": N20730
  "21027": N21027
  "21022": N21022
  "20733": N20733
  "10932": N10932
  "10933": N10933
  "10935": N10935
  "10938": N10938
  "10937": N10937
  "20069": N20069
  "20740": N20740
  "20068": N20068
  "20067": N20067
  "20188": N20188
  "21277": N21277
  "20066": N20066
  "21275": N21275
  "20064": N20064
  "20185": N20185
  "10943": N10943
  "10700": N10700
  "10942": N10942
  "9908": N9908
  "10944": N10944
  "20184": N20184
  "20062": N20062
  "20183": N20183
  "20182": N20182
  "20181": N20181
  "10941": N10941
  "10940": N10940
  "21367": N21367
  "20034": N20034
  "10907": N10907
  "10909": N10909
  "20039": N20039
  "10914": N10914
  "10915": N10915
  "9911": N9911
  "20045": N20045
  "20163": N20163
  "10917": N10917
  "10919": N10919
  "10921": N10921
  "10923": N10923
  "10922": N10922
  "10925": N10925
  "10924": N10924
  "20041": N20041
  "20498": N20498
  "16554": N16554
  "10690": N10690
  "21348": N21348
  "10693": N10693
  "10692": N10692
  "10695": N10695
  "16555": N16555
  "10696": N10696
  "10699": N10699
  all: All11
  "20027": N20027
  "5110": N5110
  "21355": N21355
  "5473": N5473
  "21353": N21353
  "20703": N20703
  "21239": N21239
  "20029": N20029
  "10901": N10901
  "10900": N10900
  "10902": N10902
  "10905": N10905
  "21350": N21350
  "19959": N19959
  "10345": N10345
  "19955": N19955
  "19954": N19954
  "10347": N10347
  "10346": N10346
  "21324": N21324
  "21201": N21201
  "21320": N21320
  "21209": N21209
  "21326": N21326
  "10679": N10679
  "10678": N10678
  "10671": N10671
  "10670": N10670
  "10675": N10675
  "10676": N10676
  "21215": N21215
  "20485": N20485
  "10680": N10680
  "21219": N21219
  "10682": N10682
  "10681": N10681
  "10683": N10683
  "10686": N10686
  "10685": N10685
  "10687": N10687
}

export interface N20697 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20333 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20332 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20339 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20699 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10899 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10898 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10659 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N5379 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10770 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N11740 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10651 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10893 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N11742 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10653 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10774 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N11741 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10894 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N11744 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10655 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10654 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10896 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20465 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20349 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10668 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N4617 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10788 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10669 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10660 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10662 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10782 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10661 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10664 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10784 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10663 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10666 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20312 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20552 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20318 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20317 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20316 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20314 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20556 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10756 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10634 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10876 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10636 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10878 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10639 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10752 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  parent_id: string
  selected: boolean
}

export interface N10633 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N11722 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10753 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20320 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20561 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N9899 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20325 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10767 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10646 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10766 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10645 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10648 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10769 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10647 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N11739 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10649 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N11738 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10640 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10760 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10642 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10884 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10641 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10762 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10765 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10643 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10764 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10885 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20533 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20532 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20534 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10617 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10618 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10732 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20544 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20542 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N22047 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20549 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20547 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10745 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10744 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10747 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10626 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10746 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10628 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10749 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N11717 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10748 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10627 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10741 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10620 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21071 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10622 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10621 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10742 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N5086 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20752 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20076 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20075 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21285 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10709 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20754 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10714 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20074 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20071 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21175 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10725 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21174 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21293 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20730 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21027 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21022 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20733 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10932 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10933 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10935 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10938 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10937 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20069 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20740 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20068 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20067 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20188 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21277 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20066 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21275 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20064 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20185 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10943 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10700 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10942 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N9908 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10944 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20184 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20062 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20183 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20182 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20181 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10941 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10940 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21367 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20034 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10907 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10909 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20039 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10914 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10915 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N9911 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20045 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20163 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10917 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10919 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10921 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10923 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10922 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10925 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10924 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20041 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20498 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N16554 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10690 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21348 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10693 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10692 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  parent_id: string
  selected: boolean
}

export interface N10695 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  parent_id: string
  selected: boolean
}

export interface N16555 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10696 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10699 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface All11 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20027 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N5110 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21355 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N5473 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21353 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20703 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21239 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20029 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10901 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10900 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10902 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10905 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21350 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N19959 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10345 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N19955 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N19954 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10347 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10346 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21324 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21201 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21320 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21209 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21326 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10679 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10678 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10671 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10670 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10675 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10676 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21215 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N20485 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10680 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N21219 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10682 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10681 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10683 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10686 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10685 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface N10687 {
  count: string
  label: string
  locale_independent_label: string
  priority: string
  selected: boolean
}

export interface FiltersV2 {
  search_filters: SearchFilter[]
  filter_sections: FilterSection[]
  metadata: Metadata
}

export interface SearchFilter {
  key: string
  value: string
}

export interface FilterSection {
  label: string
  section_id: string
  filter_groups: FilterGroup[]
}

export interface FilterGroup {
  type: string
  key: string
  tracking_key: string
  label: string
  options: Option[]
}

export interface Option {
  label: string
  value: string
  selected: boolean
  count: string
  default: boolean
  single_select?: boolean
  parent_id?: string
}

export interface Metadata {
  sort: string
}

export interface RestaurantAvailabilityOptions {
  day: string
  month: string
  year: string
  hour: string
  minute: string
  people: string
  datestring: string
  is_default: boolean
  is_set: boolean
  racable: boolean
  time_options: TimeOptions
  people_options: PeopleOptions
}

export interface TimeOptions {
  selected_option: SelectedOption
  options: Option2[]
}

export interface SelectedOption {
  value: string
  display: string
  selected: boolean
}

export interface Option2 {
  value: string
  display: string
  selected?: boolean
}

export interface PeopleOptions {
  selected_option: SelectedOption2
  options: Option3[]
}

export interface SelectedOption2 {
  value: string
  display: string
  selected: boolean
}

export interface Option3 {
  value: string
  display: string
  selected?: boolean
}

export interface OpenHoursOptions {
  closed_count: string
  is_set: boolean
  low_coverage_primary_message: string
  timezone: string
  unsure_count: string
  open_count: string
  low_coverage_secondary_message: string
  current_value: string
}

export interface Paging {
  results: string
  total_results: string
}
