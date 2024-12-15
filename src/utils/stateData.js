const countryData = () => {
  const countryOptions = [
    {
      label: "United States",
      value: "United States",
      cities: [
        "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"
      ],
    },
    {
      label: "Canada",
      value: "Canada",
      cities: [
        "Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa", "Edmonton", "Quebec City", "Winnipeg", "Hamilton", "Kitchener"
      ],
    },
    {
      label: "United Kingdom",
      value: "United Kingdom",
      cities: [
        "London", "Birmingham", "Manchester", "Liverpool", "Bristol", "Leeds", "Sheffield", "Glasgow", "Edinburgh", "Cardiff"
      ],
    },
    {
      label: "Germany",
      value: "Germany",
      cities: [
        "Berlin", "Munich", "Hamburg", "Cologne", "Frankfurt", "Stuttgart", "Dusseldorf", "Leipzig", "Dresden", "Hannover"
      ],
    },
    {
      label: "France",
      value: "France",
      cities: [
        "Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Montpellier", "Strasbourg", "Bordeaux", "Lille"
      ],
    },
    {
      label: "Australia",
      value: "Australia",
      cities: [
        "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Hobart", "Canberra", "Darwin", "Gold Coast", "Newcastle"
      ],
    },
    {
      label: "India",
      value: "India",
      cities: [
        "New Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore", "Hyderabad", "Ahmedabad", "Pune", "Jaipur", "Kochi"
      ],
    },
    {
      label: "China",
      value: "China",
      cities: [
        "Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chengdu", "Hangzhou", "Nanjing", "Wuhan", "Xi'an", "Hong Kong"
      ],
    },
    {
      label: "Japan",
      value: "Japan",
      cities: [
        "Tokyo", "Osaka", "Kyoto", "Sapporo", "Nagoya", "Fukuoka", "Kobe", "Yokohama", "Sendai", "Hiroshima"
      ],
    },
    {
      label: "Brazil",
      value: "Brazil",
      cities: [
        "Rio de Janeiro", "São Paulo", "Brasília", "Salvador", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Porto Alegre"
      ],
    },
    {
      label: "Mexico",
      value: "Mexico",
      cities: [
        "Mexico City", "Guadalajara", "Monterrey", "Puebla", "Cancún", "Tijuana", "Mérida", "Chihuahua", "Acapulco", "Mazatlán"
      ],
    },
    {
      label: "Italy",
      value: "Italy",
      cities: [
        "Rome", "Milan", "Naples", "Florence", "Turin", "Venice", "Bologna", "Palermo", "Genoa", "Catania"
      ],
    },
    {
      label: "Spain",
      value: "Spain",
      cities: [
        "Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Málaga", "Murcia", "Palma", "Las Palmas", "Bilbao"
      ],
    },
    {
      label: "Russia",
      value: "Russia",
      cities: [
        "Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Samara", "Omsk", "Kazan", "Chelyabinsk", "Rostov-on-Don"
      ],
    },
    {
      label: "South Africa",
      value: "South Africa",
      cities: [
        "Cape Town", "Johannesburg", "Durban", "Pretoria", "Port Elizabeth", "Bloemfontein", "East London", "Polokwane", "Nelspruit", "Kimberley"
      ],
    },
    {
      label: "South Korea",
      value: "South Korea",
      cities: [
        "Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Ulsan", "Suwon", "Changwon", "Jeju"
      ],
    },
    {
      label: "Egypt",
      value: "Egypt",
      cities: [
        "Cairo", "Alexandria", "Giza", "Sharm El Sheikh", "Hurghada", "Luxor", "Aswan", "Port Said", "Suez", "Ismailia"
      ],
    },
    {
      label: "Turkey",
      value: "Turkey",
      cities: [
        "Istanbul", "Ankara", "Izmir", "Bursa", "Adana", "Gaziantep", "Konya", "Antalya", "Kayseri", "Mersin"
      ],
    },
    {
      label: "Argentina",
      value: "Argentina",
      cities: [
        "Buenos Aires", "Cordoba", "Rosario", "Mendoza", "La Plata", "Tucuman", "Mar del Plata", "Salta", "San Juan", "Santa Fe"
      ],
    },
    {
      label: "Nigeria",
      value: "Nigeria",
      cities: [
        "Lagos", "Abuja", "Kano", "Ibadan", "Port Harcourt", "Benin City", "Kaduna", "Zaria", "Jos", "Aba"
      ],
    },
    {
      label: "Indonesia",
      value: "Indonesia",
      cities: [
        "Jakarta", "Surabaya", "Bandung", "Medan", "Bekasi", "Depok", "Palembang", "Makassar", "Tangerang", "Batam"
      ],
    },
    {
      label: "Pakistan",
      value: "Pakistan",
      cities: [
        "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Multan", "Faisalabad", "Sialkot", "Peshawar", "Quetta", "Gujranwala"
      ],
    },
    {
      label: "Bangladesh",
      value: "Bangladesh",
      cities: [
        "Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet", "Barisal", "Comilla", "Rangpur", "Mymensingh", "Narayanganj"
      ],
    },
    {
      label: "Vietnam",
      value: "Vietnam",
      cities: [
        "Hanoi", "Ho Chi Minh City", "Da Nang", "Hai Phong", "Can Tho", "Bien Hoa", "Nha Trang", "Hue", "Vinh", "Quy Nhon"
      ],
    },
    {
      label: "Saudi Arabia",
      value: "Saudi Arabia",
      cities: [
        "Riyadh", "Jeddah", "Mecca", "Medina", "Dammam", "Khobar", "Tabuk", "Abha", "Buraidah", "Hail"
      ],
    },
    {
      label: "Thailand",
      value: "Thailand",
      cities: [
        "Bangkok", "Chiang Mai", "Phuket", "Ayutthaya", "Pattaya", "Nakhon Ratchasima", "Udon Thani", "Khon Kaen", "Hat Yai", "Surat Thani"
      ],
    },
    {
      label: "Malaysia",
      value: "Malaysia",
      cities: [
        "Kuala Lumpur", "George Town", "Johor Bahru", "Ipoh", "Shah Alam", "Malacca", "Kota Kinabalu", "Kuching", "Alor Setar", "Seremban"
      ],
    },
    {
      label: "Afghanistan",
      value: "Afghanistan",
      cities: [
        "Kabul", "Herat", "Kandahar", "Mazar-i-Sharif", "Jalalabad", "Kunduz", "Baghlan", "Bamyan", "Ghazni", "Khost"
      ],
    },
    {
      label: "Iran",
      value: "Iran",
      cities: [
        "Tehran", "Mashhad", "Isfahan", "Shiraz", "Tabriz", "Ahvaz", "Kermanshah", "Qom", "Rasht", "Yazd"
      ],
    },
  ];

  return countryOptions;
};

export { countryData };
