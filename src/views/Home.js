import React, { Component } from "react";
// import * as API from "../functions/API";
// import LoadingOverlay from "react-loading-overlay";
// import WebConfig from "../functions/WebConfig";
import { Link } from 'react-router-dom';
// import { makeRootPath } from "../functions/Utils";

class Home extends Component {
  state = {
    isLoading: true,
    gridSetting: {
      sort: [{ field: "DuedateStatus", dir: "desc" }],
      skip: 0,
      take: 10,
    },
    MyTask: [],
    Graph: [
      {
        priority: "High Priority Task",
        total: 0,
        color: "#dd4b39",
        level: "3",
      },
      {
        priority: "Medium Priority Task",
        total: 0,
        color: "#f39c12",
        level: "2",
      },
      {
        priority: "Low Priority Task",
        total: 0,
        color: "Grey",
        level: "1",
      },
    ],
  };
  componentDidMount = async () => {
    // await this.getProcess();
    this.setState({ isLoading: false });
  };

  // getProcess = async () => {
  //   let mytask = await API.connect(
  //     "get",
  //     "/master/mastermytask/getmastermytask"
  //   );

  //   let graph = [...this.state.Graph];

  //   if (mytask && Array.isArray(mytask)) {
  //     graph[0].total = await mytask.filter((t) => t.Priority === 3).length;
  //     graph[1].total = await mytask.filter((t) => t.Priority === 2).length;
  //     graph[2].total = await mytask.filter((t) => t.Priority === 1).length;
  //     this.setState({ MyTask: mytask, Graph: graph });
  //   }

  //   //if (mytask) this.setState({ MyTask: mytask, Graph: graph });
  //   return true;
  // };

  // redirectToForm = async (event) => {
  //   window.location.href =
  //     WebConfig.SUB_FOLDER_URL +
  //     event.dataItem.ActivityPath +
  //     "?FormID=" +
  //     event.dataItem.FormID;
  // };

  labelContent = (props) => {
    //let formatedNumber = Number(props.dataItem.total).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
    return props.dataItem.priority + " Total : " + props.dataItem.total;
  };
  dataStateChange = (event) => {
    this.setState({
      gridSetting: event.data,
    });
  };
  // filterMyTask = (level) => {
  //   if (level !== null) {
  //     window.open(
  //       WebConfig.SUB_FOLDER_URL +
  //       this.props.MasterRoute.find((t) => t.UniqueMenuID === "B0100").Path +
  //       "?Priority=" +
  //       level,
  //       "_blank"
  //     );
  //   } else {
  //     window.open(
  //       WebConfig.SUB_FOLDER_URL +
  //       this.props.MasterRoute.find((t) => t.UniqueMenuID === "B0100").Path,
  //       "_blank"
  //     );
  //   }
  // };

  render() {
    return (
      <div>
        {/* <LoadingOverlay active={this.state.isLoading} spinner> */}
          <div className="content-wrapper">
            <section className="content-header">
              <h1 className="headerForm">Home</h1>
            </section>
            <br />

            {(this.props.MasterRoute && Array.isArray(this.props.MasterRoute) && this.props.MasterRoute.length) ?
              <>
                <div className="content">
                  <div className="row">
                    {/* <div className="col-sm-12"> */}
                    <div className="box box-primary">
                      <br />

                      <div className="row">
                        <div
                          className="col-xs-1"
                          style={{ cursor: "pointer", width: "180px", paddingLeft: "16px" }}
                        >
                          <div
                            className="small-box bg-navy"
                            style={{ height: "150px", width: "150px" }}
                            // onClick={() => this.filterMyTask(null)}
                          >
                            <div className="inner">
                              <h3>
                                {
                                  this.state.MyTask.filter(
                                    (t) => t.Priority !== 0
                                  ).length
                                }
                              </h3>
                              <p>All Task</p>
                            </div>
                            <div className="icon">
                              <i className="ion ion-pie-graph" />
                            </div>
                          </div>
                        </div>

                        {this.state.Graph.map((graph, key) => {
                          return (
                            <div
                              className="col-xs-1"
                              style={{ cursor: "pointer", width: "180px" }}
                              key={key}
                            >
                              {/* small box */}
                              <div
                                className="small-box bg-navy"
                                style={{ height: "150px", width: "150px" }}
                                key={key}
                                onClick={() => this.filterMyTask(graph.level)}
                              >
                                <div className="inner">
                                  <h3>{graph.total}</h3>
                                  <p>{graph.priority}</p>
                                </div>
                                <div className="icon">
                                  <i className="ion ion-pie-graph" />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {this.props.MasterMenu.map((menu, key) => {
                        return (
                          <div className="row" key={key}>
                            <div className="">
                              {menu.SubMenus.filter(
                                (item) => item.Creatable === true
                              ).length > 0 ||
                                (menu.Creatable === true &&
                                  menu.HasChildren === false) ? (
                                <h3 style={{ marginLeft: "1em" }}>
                                  {menu.MenuName}
                                </h3>
                              ) : (
                                ""
                              )}
                            </div>
                            {menu.SubMenus.filter(
                              (item) => item.Creatable === true
                            ).length > 0 ? (
                              menu.SubMenus.filter(
                                (item) => item.Creatable === true
                              ).map((submenu, key) => {
                                return (
                                  <Link
                                    // to={makeRootPath(submenu.Path)}
                                    key={key}
                                    style={{ height: "160px", width: "180px" }}
                                  >
                                    <div
                                      className="col-xs-1"
                                      style={{
                                        cursor: "pointer",
                                        height: "160px", width: "180px",
                                      }}
                                    >
                                      <div className="pad box-pane-right bg-blue" style={{ height: "150px", width: "150px" }}>
                                        <div className="description-block">
                                          <div
                                            className="sparkbar pad"
                                            data-color="#fff"
                                          >
                                            <i
                                              className={submenu.Icon}
                                              style={{ fontSize: "30px" }}
                                            />
                                          </div>
                                          <span className="description-text"
                                            style={{ fontSize: "12px" }}
                                          >
                                            {submenu.MenuName}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })
                            ) : menu.Creatable === true &&
                              menu.HasChildren === false ? (
                              <Link
                                // to={makeRootPath(menu.Path)} 
                                key={key}
                              >
                                {
                                  <div
                                    className="col-xs-1"
                                    style={{ paddingBottom: "1em" }}
                                  >
                                    <div className="pad box-pane-right bg-blue"
                                      style={{ height: "150px", width: "150px" }}
                                    >
                                      <div className="description-block">
                                        <div
                                          className="sparkbar pad"
                                          data-color="#fff"
                                        >
                                          <i
                                            className={menu.Icon}
                                            style={{ fontSize: "30px" }}
                                          />
                                        </div>
                                        <span className="description-text"
                                          style={{ fontSize: "12px" }}
                                        >
                                          {menu.MenuName}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                }
                              </Link>
                            ) : (
                              ""
                            )}
                          </div>
                        );
                      })}

                      <div className="box-body">

                      </div>
                    </div>
                  </div>
                </div>
                <br /></>
              :
              <div className="content">
                {!this.state.isLoading
                  ? "คุณไม่มีสิทธิ์ในการเข้าถึงแบบฟอร์มนี้"
                  : ""}
              </div>
            }
          </div>
        {/* </LoadingOverlay> */}
      </div>
    );
  }
}
export default Home;
