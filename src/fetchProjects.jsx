import { createClient } from "contentful";
import { useEffect, useState } from "react";
// space id gfmk4pkjus4j
// access token - Sot0fuX1iLxltuXWnmkhwBIkzS-wXf9DNUROBrtW0tU

const client = createClient({
    space: "gfmk4pkjus4j",
    environment: "master",
    accessToken: "Sot0fuX1iLxltuXWnmkhwBIkzS-wXf9DNUROBrtW0tU",
});

export const useFetchProjects = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const getData = async () => {
        try {
            const response = await client.getEntries({
                content_type: "projects",
            });

            const projects = response.items.map((item) => {
                const { title, url, image } = item.fields;

                const id = item.sys.id;
                const img = image?.fields?.file?.url;

                return { title, id, url, img };
            });

            setProjects(projects);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return { loading, projects };
};
