import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import AddProject from "./AddProject";
import Project from "./Project";
import Loader from "../utils/Loader";
import { Row } from "react-bootstrap";

import { NotificationSuccess, NotificationError } from "../utils/Notifications";
import {
    getProjects as getProjectList,
    donateToProject,
    donateToAllProjects,
    createProject,
    getOngoingProjectCount,
} from "../../utils/donations";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    // function to get the list of projects
    const getProjects = useCallback(async () => {
        try {
            setLoading(true);
            setProjects(await getProjectList());
        } catch (error) {
        } finally {
            setLoading(false);
        }
    });

    const addProject = async (data) => {
        try {
            setLoading(true);
            createProject(data).then((resp) => {
                getProjects();
            });
            toast(<NotificationSuccess text="Project created successfully." />);
        } catch (error) {
            console.log({ error });
            toast(<NotificationError text="Failed to create project." />);
        } finally {
            setLoading(false);
        }
    };

    const donateToAll = async () => {
        let countIt = 0;
        try {
            setLoading(true);
            await getOngoingProjectCount().then((resp) => {
                countIt = resp;
            }, (err) => {
                console.log({ err });
            });
            await donateToAllProjects({
                amount: countIt,
            }).then(() => getProjects());
            toast(<NotificationSuccess text="Donation successfully made to all Projects." />);
        } catch (error) {
            console.log({ error });
            toast(<NotificationError text="Failed to make donation." />);
        } finally {
            setLoading(false);
        }
    }



    //  function to initiate transaction
    const donate = async (id, price) => {
        try {
            await donateToProject({
                id,
                price,
            }).then(() => getProjects());
            toast(<NotificationSuccess text="Donation successfully made to Project." />);
        } catch (error) {
            toast(<NotificationError text="Failed to make donation." />);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProjects();
    }, [getProjects]);

    return (
        <>
            {!loading ? (
                <>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h1 className="fs-4 fw-bold mb-0">Near Project(Crowdfuse)</h1>
                        <button className="btn btn-dark" onClick={donateToAll}>Donate To All(1 Near Each)</button>
                        <AddProject save={addProject} />

                    </div>
                    <Row xs={1} sm={2} lg={3} className="g-3  mb-5 g-xl-4 g-xxl-5">
                        {projects.map((_project) => (
                            <Project
                                project={{
                                    ..._project,
                                }}
                                donate={donate}
                            />
                        ))}
                    </Row>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Projects;