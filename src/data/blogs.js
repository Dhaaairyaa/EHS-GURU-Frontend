const blogs = [
    {
        title:"Union Budget 2024 on Climate Action",
        date:"2024-07-29",  
        author:"Bhavya Singh",
        co_author:"Amit Kumar",
        link:"https://www.linkedin.com/pulse/union-budget-2024-climate-action-ehsguru-xsnjc/?trackingId=%2B8A%2BSmOola%2B0cumsYk23OA%3D%3D",
        ImgrUrl:"https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/blogs_images%2FUnion-Budget.jpeg?alt=media&token=e63e6cde-965e-42e7-9740-d6984323f784"
    },
    {
        title:"Union Budget 2024: Key Highlights on the Energy Sector ",
        date:"2024-07-28",
        author:"Nikita Kumari ",
        link:"https://www.linkedin.com/pulse/union-budget-2024-key-highlights-energy-sector-ehsguru-3lkrc/?trackingId=gyc6bPzM7nNQAsHw%2BH%2FGWQ%3D%3D",
        ImgrUrl:"https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/blogs_images%2Fenergy%20sector.png?alt=media&token=747f4278-99d5-4541-b857-0ba71cc4028b"
    },
    {
        title:"ESG Highlights in Indian Budget 2024",
        date:"2024-07-24",
        author:"Nimisha Sharma",
        co_author:"Sushree Sunanda Sahu ",
        link:"https://www.linkedin.com/pulse/esg-highlights-indian-budget-2024-ehsguru-2twyc/?trackingId=xjfzVWYM5IIrgKGSmfEQCw%3D%3D",
        ImgrUrl:"https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/blogs_images%2FESG-highlights-2024.jpeg?alt=media&token=c11abfa7-a0dc-4bec-9f15-a197e16c1438"
    },
    {
        title:"Food Choices and Land Degradation",
        date:"2024-06-03",
        author:"Shikha Sharma",
        co_author:"",
        link:"https://www.linkedin.com/pulse/food-choices-land-degradation-ehsguru-oioic/?trackingId=K7dqowXuyzWUhEgNDU2bYw%3D%3D",
        ImgrUrl:"https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/blogs_images%2FFood-choices.jpeg?alt=media&token=a1acf7ff-f320-47ef-88fa-e63bccd167fc"
    },
    {
        title:"RBI Draft Disclosure Framework on Climate-related Financial Risks 2024",
        date:"2024-03-09",
        author:"Siddesh Sitaram Bhor",
        co_author:" ",
        link:"https://www.linkedin.com/pulse/rbi-draft-disclosure-framework-climate-related-financial-risks-7oduc/?trackingId=4eudJ7HUGSs2lw5RHYz%2BOA%3D%3D",
        ImgrUrl:"https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/blogs_images%2FRBI%20Draft.png?alt=media&token=2272becb-c5d9-4ce9-9330-d0ccf7d8dfcf"
    },
    {
        title:"Carbon Credits: Achieving Sustainable Growth with Financial Incentives",
        date:"2024-01-29",
        author:"Saijal Gulati",
        co_author:" ",
        link:"https://www.linkedin.com/pulse/carbon-credits-achieving-sustainable-growth-financial-incentives-ucolc/?trackingId=b%2BhvvAWwdfr9pwZSDteCNQ%3D%3D",
        ImgrUrl:"https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/blogs_images%2Fcarbon%20credits.png?alt=media&token=f591dce5-b14a-4177-85d1-337ea5887537"
    },
    {
        title:"ESG Foundations in Indian Constitution",
        date:"2023-11-26",
        author:"Sushree Sunanda Sahu",
        co_author:" ",
        link:"https://www.linkedin.com/pulse/esg-foundations-indian-constitution-ehsguru-jozpf/?trackingId=7%2FJgggC5TZh5gW73sud%2FLw%3D%3D",
        ImgrUrl:"https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/blogs_images%2Fesg%20foundations%20in%20indian%20const.png?alt=media&token=1188e0fa-e2dc-4f04-8c71-7e02865aaf39"
    },
    {
        title:"Know Your Fire Extinguisher",
        date:"2023-09-20",
        author:"Neeraj Khare",
        co_author:" ",
        link:"https://www.linkedin.com/pulse/know-your-fire-extinguisher-ehsguru/?trackingId=Ly0fWFTXcFIVAoy%2Bt53Prg%3D%3D",
        ImgrUrl:" "
    },
    {
        title:"The Benefits of Ethanol Blending: India's Experience",
        date:"2023-09-13",
        author:"Sushree Sunanda Sahu",
        co_author:" ",
        link:"https://www.linkedin.com/pulse/benefits-ethanol-blending-indias-experience-ehsguru/?trackingId=eV%2BbJ5Ya1zRFDdO2MBsCDQ%3D%3D",
        ImgrUrl:"https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/blogs_images%2FG20%20leaders.jfif?alt=media&token=3296f6d0-a6df-4ad5-921e-f7630463c49a"
    },
    {
        title:"G-20 Leaders Advance Sustainability Agenda",
        date:"2023-09-11",
        author:"Sushree Sunanda Sahu",
        co_author:" ",
        link:"https://www.linkedin.com/pulse/g-20-leaders-advance-sustainability-agenda-ehsguru/?trackingId=ZS9v39torAuMNHHTpNKrIQ%3D%3D",
        ImgrUrl:" "
    },
    {
        title:"Global Biofuels Alliance",
        date:"2023-09-09",
        author:"Sushree Sunanda Sahu",
        co_author:" ",
        link:"https://www.linkedin.com/pulse/global-biofuels-alliance-ehsguru/?trackingId=mt39ioBi%2Fza94PtGLzYfPA%3D%3D",
        ImgrUrl:"https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/blogs_images%2FGlobal%20biofuels.png?alt=media&token=f25d94c9-d68a-410a-9ddd-ccd0e2b98764"
    },
    {
        title:"Driving Sustainability: India's Visionary LiFE Mission",
        date:"2023-09-04",
        author:"Sushree Sunanda Sahu",
        co_author:" ",
        link:"https://www.linkedin.com/pulse/driving-sustainability-indias-visionary-life-mission-ehsguru/?trackingId=h2sXwyA3vIzrRUTu3fCKXw%3D%3D",
        ImgrUrl:" "
    },
    {
        title:"The Contentious Forest Conservation (Amendment) Bill,2023",
        date:"2023-08-26",
        author:"Sushree Sunanda Sahu",
        co_author:" ",
        link:"https://www.linkedin.com/pulse/contentious-forest-conservation-amendment-bill-2023-ehsguru/?trackingId=zENDuHJvaELaXH7xybD4XA%3D%3D",
        ImgrUrl:"https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/blogs_images%2FContentious%20Forest%20Conservation.jfif?alt=media&token=118ab801-aa91-4c66-b12d-079846ef7d6a"
    },
    {
        title:"National Hazardous Waste Tracking System",
        date:"2023-08-17",
        author:"Sushree Sunanda Sahu",
        co_author:"",
        link:"https://www.linkedin.com/pulse/national-hazardous-waste-tracking-system-ehsguru/?trackingId=J50Vj39kIndgtNPAFMu16w%3D%3D",
        ImgrUrl:"https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/blogs_images%2Fnational%20hazardous%20waste%20tracking%20system.jfif?alt=media&token=288fa86c-136e-4bb2-825c-0baf67b82deb"
    },
    {
        title:"Empowering Women through the OSH Code, 2020",
        date:"2023-08-11",
        author:"Sushree Sunanda Sahu",
        co_author:"",
        link:"https://www.linkedin.com/pulse/empowering-women-through-osh-code-2020-ehsguru/?trackingId=K0o%2BpY5ivnoNXhHH0cJd5Q%3D%3D",
        ImgrUrl:"https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/blogs_images%2FEmpowering%20women.jfif?alt=media&token=5027f168-f360-4807-8804-8913d873fa33"
    },
    {
        title:"The Occupational Safety, Health and Working Conditions Code, 2020: A Step Towards Simplifying Labour Laws in India",
        date:"2023-08-07",
        author:"Sushree Sunanda Sahu",
        co_author:" ",
        link:"https://www.linkedin.com/pulse/occupational-safety-health-working-conditions-code-2020-step-towards/?trackingId=gf5cKVh4CaLLzATdlhspHg%3D%3D",
        ImgrUrl:"https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/blogs_images%2FThe%20Occupational%20safety.png?alt=media&token=89aa8f21-9963-4af7-9545-fc0c9cc11ea6"
    },
    {
        title:"World Environment Day 2023",
        date:"2023-06-05",
        author:"Keerthana A S",
        co_author:" ",
        link:"https://www.linkedin.com/pulse/world-environment-day-2023-ehsguru/?trackingId=oSoWx2MqKChswKMwfgBTJA%3D%3D",
        ImgrUrl:"https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/blogs_images%2FWorld%20Enviornment%20Day%202023.png?alt=media&token=6a21fa6c-1469-4c36-926f-bddc4a10d7bd"
    },
    {
        title:"Linkage of G20 in Environmental Sustainability",
        date:"2023-04-26",
        author:"Sheena Mehta",
        co_author:"Piyush Soni",
        link:"https://www.linkedin.com/pulse/linkage-g20-environmental-sustainability-ehsguru/?trackingId=qgP6F0CGM2K9y5vzYslDCw%3D%3D",
        ImgrUrl:"https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/blogs_images%2FE-waste.jfif?alt=media&token=64b38027-b457-41c0-82f2-6c8adad525ba"
    },
    {
        title:"Principles of Environmental Law in India",
        date:"2023-05-03",
        author:"Shivangi V.",
        co_author:" ",
        link:"https://www.linkedin.com/pulse/principles-environmental-law-india-ehsguru/?trackingId=BpJ9A%2B34nQ7Q6ct7IUdiSw%3D%3D",
        ImgrUrl:"https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/blogs_images%2FPrinciples%20of%20Enviornmental%20Law%20in%20India.jfif?alt=media&token=7abcc085-89ad-47c9-822d-b85322a8d5f8"
    },
    {
        title:"E-Waste (Management) Rules, 2022 & Battery Waste Management Rules, 2022: Some Insights",
        date:"2023-04-01",
        author:"Mohini Arora",
        co_author:" ",
        link:"https://www.linkedin.com/pulse/e-waste-management-rules-2022-battery-waste-ehsguru/?trackingId=4uOrBeBlBfdcaCfQbPUsVQ%3D%3D",
        ImgrUrl:" "
    },
    {
        title:"Global Biofuels: A Green Energy Revolution",
        date:"2023-03-22",
        author:"Keerthana A S",
        co_author:" ",
        link:"https://www.linkedin.com/pulse/global-biofuels-green-energy-revolution-ehsguru/?trackingId=veUpppZ2GvxGDa%2F%2FQknEyg%3D%3D",
        ImgrUrl:"https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/blogs_images%2FGlobal%20biofuels.png?alt=media&token=f25d94c9-d68a-410a-9ddd-ccd0e2b98764"
    },
    
];
export default blogs;
    