/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['localhost', 'localhsot:3000/'], 

    
        remotePatterns:[
          {
            protocol: 'https',
            hostname: 'cdn.kreezalid.com',
            pathname: '/kreezalid/**', // Adjust the pathname if needed based on your URL structure
          },
        
        ],
     

        


    
    },
  };
  
  export default nextConfig;
  