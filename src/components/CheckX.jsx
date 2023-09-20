import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Navbar () {
  const router = useRouter();
 
  
  const { slug } = router.query;

  useEffect(() => {
    console.log(slug);
  }, []);

  return <p>Slug: {slug}</p>
}